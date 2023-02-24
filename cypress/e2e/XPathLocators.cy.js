

describe('XPathLocators', () => {
    it('find no of products', () => {
        
        cy.visit("https://automationexercise.com/")

        cy.xpath("//a[@href='/products']").click()

        cy.get("#search_product").type("polo")

        cy.get(".fa-search").click()

        
    });
});