import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "10s", target: 50 }, // Ramp-up
    { duration: "20s", target: 50 }, // Hold load
    { duration: "5s", target: 0 }, // Ramp-down
  ],
  thresholds: {
    http_req_duration: ["p(95)<10000"], // 95% of requests <10s
    http_req_failed: ["rate<0.10"], // <10% failures
  },
};

export default function () {
  const url = "https://dummyjson.com/auth/login";
  const payload = JSON.stringify({
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
  });

  const params = {
    headers: { "Content-Type": "application/json" },
  };
  let attempt = 0;
  let response;

  // Retry mechanism for handling rate limits (status 429)
  while (attempt < 3) {
    response = http.post(url, payload, params);
    if (response.status !== 429) break; // Continue if not rate-limited
    console.warn(`⏳ Rate limited! Retrying in 2s... Attempt: ${attempt + 1}`);
    sleep(2);
    attempt++;
  }

  // Log failures for debugging
  if (response.status !== 200) {
    console.error(
      `Request failed! Status: ${response.status}, Body: ${response.body}`
    );
  }

  check(response, {
    "is status 200": (r) => r.status === 200,
    "response time < 10000ms": (r) => r.timings.duration < 10000,
  });

  sleep(1);
}
