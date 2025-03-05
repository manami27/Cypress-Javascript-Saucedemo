import ApiLoginPage from "../pageObjects/apiLoginPage";

describe("API Login Tests", () => {
  let validUser, invalidUsers, expiresInMins;

  before(() => {
    cy.fixture("loginDataAPI").then((data) => {
      validUser = data.validUser;
      invalidUsers = data.invalidUsers;
      expiresInMins = data.expiresInMins;
    });
  });

  it("Successful API login", () => {
    ApiLoginPage.login(
      validUser.username,
      validUser.password,
      expiresInMins
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("accessToken"); // Check if token is returned
    });
  });

  it("Failed API login with invalid credentials", () => {
    invalidUsers.forEach((user) => {
      ApiLoginPage.login(user.username, user.password, expiresInMins).then(
        (response) => {
          expect(response.status).to.eq(400);
        }
      );
    });
  });
});
