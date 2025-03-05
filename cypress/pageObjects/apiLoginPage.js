class ApiLoginPage {
  login(username, password, expiresInMins = 60) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/auth/login`, // Use API base URL from config
      failOnStatusCode: false,
      body: { username, password, expiresInMins },
    });
  }
}

export default new ApiLoginPage();
