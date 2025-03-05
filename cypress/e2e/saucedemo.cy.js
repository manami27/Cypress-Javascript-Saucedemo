import LoginPage from "../pageObjects/loginPage";

describe("E2E Login Tests", () => {
  beforeEach(function () {
    LoginPage.visit();
  });

  it("Successful login with valid credentials", function () {
    this.loginData.validUsers.forEach((user) => {
      try {
        cy.login(user.username, user.password);
        LoginPage.validateSuccessfulLogin();
        cy.log(`Successfully logged in with: ${user.username}`);
      } catch (error) {
        cy.log(`Error during login for: ${user.username}`, error);
        throw error;
      } finally {
        cy.visit("/"); // Reset halaman sebelum mencoba user berikutnya
      }
    });
  });

  it("Failed login with invalid credentials", function () {
    this.loginData.invalidUsers.forEach((user) => {
      try {
        cy.login(user.username, user.password);
        LoginPage.getErrorMessage().should("be.visible");
        cy.log(`Login failed as expected for: ${user.username}`);
      } catch (error) {
        cy.log(`Unexpected error for: ${user.username}`, error);
      } finally {
        cy.visit("/"); // Reset halaman sebelum mencoba user berikutnya
      }
    });
  });
});
