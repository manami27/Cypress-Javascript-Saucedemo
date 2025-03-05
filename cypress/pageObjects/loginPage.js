class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  getUsernameField() {
    return cy.get("#user-name");
  }

  getPasswordField() {
    return cy.get("#password");
  }

  getLoginButton() {
    return cy.get("#login-button");
  }

  getErrorMessage() {
    return cy.get("[data-test='error']");
  }

  login(username, password) {
    this.getUsernameField().type(username);
    this.getPasswordField().type(password);
    this.getLoginButton().click();
  }

  validateSuccessfulLogin() {
    cy.url().should("include", "/inventory.html");
  }
}

export default new LoginPage(); // Export sebagai instance
