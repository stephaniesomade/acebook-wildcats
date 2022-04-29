describe("Likes", () => {
    it("can like posts", () => {
      // sign up
      cy.visit("/users/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("password");
      cy.get("#submit").click();
  
      // sign in
      cy.visit("/sessions/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("password");
      cy.get("#submit").click();
  
      // like a post
      cy.visit("/posts");
      cy.get("#like").submit();
      cy.contains("1"); 
      cy.get("#like").submit();
      cy.contains("2"); 
    });
});