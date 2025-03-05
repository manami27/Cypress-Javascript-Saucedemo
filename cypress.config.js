const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com", // UI base URL
    env: {
      apiUrl: "https://dummyjson.com", // API base URL
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    supportFile: "cypress/support/e2e.js",
  },
});
