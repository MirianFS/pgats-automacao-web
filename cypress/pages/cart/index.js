import { faker } from '@faker-js/faker';

class Cart{
    verificarTitulos(){
        cy.get(':nth-child(2) > .heading').should('have.text', 'Address Details')
        cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order')
        return this
    }

    adicionarComentario(){
        cy.get('.form-control').type(faker.lorem.lines())
        cy.get('.btn-default.check_out').click()
        return this
    }
}

export default new Cart()