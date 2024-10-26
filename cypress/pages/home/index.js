class Home{
    clicarEmViewCard(){
        cy.contains("Add to cart").click()
        cy.contains("View Cart").click()
        cy.get('.btn-default.check_out').should('be.visible')
        return this
    }
    
    clicarEmBotaoCheckout(){
        cy.get('.btn-default.check_out').click()
        return this
    }

}

export default new Home()