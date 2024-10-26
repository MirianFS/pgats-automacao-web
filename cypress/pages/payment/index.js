import { faker } from '@faker-js/faker';

class Payment{
    preencherFormulario(){
        const date = faker.date.future({ years: 5});  
        
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
        cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
        cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
        cy.get('[data-qa="expiry-month"]').type(date.getUTCMonth()+1) 
        cy.get('[data-qa="expiry-year"]').type(date.getFullYear().toString())
        cy.get('[data-qa="pay-button"]').click()
        return this
    }

    verificarSeCadastroFoiConcluido(){
        cy.get('[data-qa="order-placed"]').should('be.visible')
        return this
    }

}
export default new Payment()