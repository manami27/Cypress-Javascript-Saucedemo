describe("API Login Tests", () => {
  let validUser, invalidUsers;

  before(() => {
    cy.fixture("loginData").then((data) => {
      validUser = data.validUser;
      invalidUsers = data.invalidUsers;
    });
  });

  it("Successful API login", () => {
    cy.request({
      method: "POST",
      url: "https://dummyjson.com/auth/login",
      body: {
        username: validUser.username,
        password: validUser.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });

  it("Failed API login with invalid credentials", () => {
    invalidUsers.forEach((user) => {
      cy.request({
        method: "POST",
        url: "https://dummyjson.com/auth/login",
        failOnStatusCode: false,
        body: {
          username: user.username,
          password: user.password,
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });
});
