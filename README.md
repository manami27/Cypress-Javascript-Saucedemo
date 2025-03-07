# Saucedemo Cypress Test

📌 **Project Overview**

This project automates testing for the login functionality of [Saucedemo.com](https://www.saucedemo.com) using [Cypress](https://www.cypress.io/). It includes End-to-End (E2E) Testing, API Automation Testing using [DummyJSON API](https://dummyjson.com/), and Load Testing [DummyJSON API](https://dummyjson.com/) using [K6](https://k6.io/).

📂 **Folder Structure**

```
saucedemo-cypress-test/
│── cypress/
│   ├── e2e/ # Test cases
│   │   ├── saucedemo.cy.js # E2E tests for Saucedemo
│   │   ├── dummyJsonAPI.cy.js # API tests for DummyJSON API
│   ├── api/ # API utilities
│   │   ├── apiLogin.js # API login helper
│   ├── pageObjects/ # Page Object Models (UI)
│   │   ├── loginPage.js # UI Login Page methods
│   ├── fixtures/ # Test data
│   │   ├── loginData.json # JSON test data for Saucedemo UI
│   │   ├── loginDataAPI.json # JSON test data for API
│   ├── support/ # Custom commands & global setup
│   │   ├── commands.js # Cypress custom commands
│   │   ├── e2e.js # Global test setup
│── loadtest/ # Load testing with K6
│   ├── loadTest.js # K6 load test script
│── .github/workflows/ # GitHub Actions CI/CD
│   ├── api-test.yml # Workflow for Cypress API tests
│   ├── ui-test.yml # Workflow for Cypress UI tests
│   ├── load-test.yml # Workflow for K6 load tests
│── .gitignore # Ignored files
│── package.json # Project dependencies
│── cypress.config.js # Cypress configuration
│── README.md # Project documentation

```

🚀 **Installation & Setup**

1️⃣ **Clone the repository:**

```bash
git clone https://github.com/manami27/Cypress-Javascript-Saucedemo.git
```
```bash
cd Cypress-Javascript-Saucedemo
```

2️⃣ **Install dependencies:**

```bash
npm install
```
⚠️ **Note on K6 Installation**

K6 is not an npm package. You need to install it separately based on your operating system:

- For Windows (using Chocolatey):
```bash
choco install k6
```
- For Windows (using Scoop):
```bash
scoop install k6
```
- For macOS (using Homebrew):
```bash
brew install k6
```
- For Linux (using apt for Debian/Ubuntu):
```bash
sudo apt update
```
```bash
sudo apt install k6
```

After installation, verify it using:
```bash
k6 version
```

🧪 **Running Tests**

1️⃣ **Run E2E Tests (UI Mode):**

```bash
npx cypress open
```

This will open the Cypress Test Runner UI.

2️⃣ **Run E2E Tests (Headless Mode):**

```bash
npx cypress run --spec cypress/e2e/saucedemo.cy.js
```

3️⃣ **Run API Tests (Headless Mode):**

```bash
npx cypress run --spec cypress/e2e/dummyJsonAPI.cy.js
```

4️⃣ **Run Load Tests (K6):**

```bash
k6 run loadtest/loadTest.js
```

🧪 **Test Scenarios**

✅ **End-to-End (E2E) Tests**

- Login with valid credentials ✅
- Login with invalid credentials ❌
- Check error messages on failure 🛑

🔗 **API Automation Tests**

- **POST Login API** → Verify successful login returns a token
- **Negative Test Cases** → Invalid credentials should return an error

🚦 **Load & Performance Testing**

- 50 concurrent users logging in over 30 seconds
- Measure response times and error rates

🛠 **CI/CD Integration**

This repository uses [GitHub Actions](https://docs.github.com/en/actions) for continuous integration.

**Triggers:** Push, Pull Requests, Manual Workflow Dispatch.

- Runs Cypress Tests in CI/CD Pipeline.
- Runs Load Tests in CI/CD Pipeline.
- To manually trigger a test run in GitHub:
  - Go to **Actions** tab in the repository.
  - Select **Cypress Tests** or **Load Tests** workflow.
  - Click **Run workflow**.

📄 **Approach & Reasoning**

This project follows a structured testing approach:

- Page Object Model (POM) for UI Testing:
  - Separates test logic from UI elements for better maintainability.
  - ``pageObjects/loginPage.js`` encapsulates login-related actions.
- Modular API Testing:
  - API interactions are handled in ``cypress/api/apiLogin.js`` to keep tests clean.
  - Uses ``cy.request()`` for API calls to ensure direct and fast API validation.
- Load Testing with K6:
  - ``loadtest/loadTest.js`` simulates concurrent users.
  - Integrated with GitHub Actions to automate load testing.

🤝 **Contributing**

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Add feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature-name
   ```
5. **Open a Pull Request 🚀**

💡 **Happy Testing! 🚀**
