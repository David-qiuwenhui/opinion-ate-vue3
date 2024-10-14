describe("create a message", () => {
  it("display a message in the list", () => {
    cy.visit("http://localhost:5173/");

    cy.get("[data-test='messageText']").type("new message");

    cy.contains("send").click();

    cy.get("[data-test='messageText']").should("have.value", "");

    cy.contains("new message");
  });
});
