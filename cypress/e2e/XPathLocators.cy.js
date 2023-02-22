

describe('XPathLocators', () => {
    it('find no of products', () => {
        
        cy.visit("https://automationexercise.com/")

        cy.xpath("//a[@href='/products']").click()

        
    });
});