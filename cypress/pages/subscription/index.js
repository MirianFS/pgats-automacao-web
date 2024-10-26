import { faker } from '@faker-js/faker';

class Subscription{
    preencherSubscription(){
        cy.get('input#susbscribe_email').scrollIntoView().type(faker.internet.email())
        cy.get('button#subscribe').click();
        return this
    }

    verificarSeSubcriptionFoiRealizada(){
        cy.contains('You have been successfully subscribed!').should('be.visible')
        return this
    }
}
export default new Subscription()
