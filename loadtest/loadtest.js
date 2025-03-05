import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "10s", target: 50 }, // Ramp-up to 50 users in 10s
    { duration: "20s", target: 50 }, // Hold 50 users for 20s
    { duration: "5s", target: 0 }, // Ramp-down to 0 users in 5s
  ],
  thresholds: {
    http_req_duration: ["p(95)<10000"], // 95% of requests should be <10000ms
    http_req_failed: ["rate<0.05"], // Error rate should be <5%
  },
};

export default function () {
  const url = "https://dummyjson.com/auth/login";
  const payload = JSON.stringify({
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30, // optional, defaults to 60
  });

  const params = {
    headers: { "Content-Type": "application/json" },
  };

  let response = http.post(url, payload, params);

  check(response, {
    "is status 200": (r) => r.status === 200,
    "response time < 10000ms": (r) => r.timings.duration < 10000,
  });

  sleep(1); // Simulate user wait time
}
