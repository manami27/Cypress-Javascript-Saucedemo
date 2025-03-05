Saucedemo Cypress Test

📌 Project Overview

This project automates testing for the login functionality of Saucedemo.com using Cypress. It includes End-to-End (E2E) Testing and API Automation Testing using DummyJSON API.

📂 Folder Structure

saucedemo-cypress-test/
│── cypress/
│ ├── e2e/ # Test cases
│ │ ├── saucedemo.cy.js # Login tests saucedemo
| | ├── dummyJsonAPI.cy.js # Login test DummyJson API
│ ├── pageObjects/ # Page Object Models
│ │ ├── loginPage.js # Login Page methods
│ ├── fixtures/ # Test data
│ │ ├── loginData.json # JSON test data for saucedemo
│ │ ├── loginDataAPI.json # JSON test data for API
│ ├── support/ # Custom commands & e2e setup
│ │ ├── commands.js # Cypress custom commands
│ │ ├── e2e.js # Global test setup
│── .github/workflows/ci.yml # GitHub Actions workflow
│── package.json # Project dependencies
│── README.md # Project documentation

🚀 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/saucedemo-cypress-test.git
cd saucedemo-cypress-test

Install dependencies:

npm install

Run Cypress tests locally:

npx cypress open

This will open the Cypress Test Runner UI.

🧪 Test Scenarios

✅ End-to-End (E2E) Tests

Login with valid credentials ✅

Login with invalid credentials ❌

Check error messages on failure 🛑

🔗 API Automation Tests

POST Login API → Verify successful login returns a token

Negative Test Cases → Invalid credentials should return an error

🚦 Load & Performance Testing

50 concurrent users logging in over 30 seconds

Measure response times and error rates

⚡ Running Tests

1️⃣ Run E2E Tests (Headless Mode)

npx cypress run

2️⃣ Run API Tests (Postman/Newman)

newman run cypress/e2e/apiTests.postman_collection.json

3️⃣ Run Load Tests (K6)

k6 run loadTest.js

🔄 CI/CD Integration

This project uses GitHub Actions for automation.

Triggers: Push, Pull Requests, Manual Workflow Dispatch

Runs Cypress Tests in CI/CD Pipeline

To manually trigger a test run in GitHub:

Go to Actions tab in the repository

Select Cypress Tests workflow

Click Run workflow

🤝 Contributing

Fork the repository

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add feature')

Push to the branch (git push origin feature-name)

Open a Pull Request 🚀

📜 License

This project is licensed under the MIT License.

💡 Happy Testing! 🚀
