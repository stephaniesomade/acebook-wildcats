// describe("Friends", () => {
//     it("Allows a user to add a friend", () => {
//       cy.visit("/users/new");
//       cy.get("#email").type("someone@example.com");
//       cy.get("#password").type("password");
//       cy.get("#submit").click();

  
//       cy.visit("/sessions/new");
//       cy.get("#email").type("someone@example.com");
//       cy.get("#password").type("password");
//       cy.get("#submit").click();

//       cy.url().should('include', '3030/posts');
//       cy.get