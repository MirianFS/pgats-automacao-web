import { faker } from '@faker-js/faker';

class Signup {
    preencherFormulario(name, email, senha){   
        const date = faker.date.past({ years: 100, refDate: '2021-01-01T00:00:00.000Z' });  
        const signUpName = name == null ? faker.person.fullName() : name
        
        Cypress.env('signUpName', signUpName)

        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'));
        cy.get('[data-qa="signup-email"]').type(email == null ? faker.internet.email() : email);
        cy.get('[data-qa="signup-button"]').click()
        
        cy.get('input[type=radio]').check('Mrs');
        cy.get('[type=password]').type(senha == null ? faker.internet.password() : senha, {log: false});
    
        cy.get('[data-qa="days"]').select(date.getDay())
        cy.get('[data-qa="months"]').select(date.getUTCMonth()+1) 
        cy.get('[data-qa="years"]').select(date.getFullYear().toString()) 
        cy.get('input[type=checkbox]#newsletter').check();
        cy.get('input[type=checkbox]#optin').check();

        cy.get('[data-qa="first_name"]').type(faker.person.firstName())
        cy.get('[data-qa="last_name"]').type(faker.person.lastName())
        cy.get('[data-qa="company"]').type(faker.company.name())
        cy.get('[data-qa="address"]').type(faker.location.street())
        cy.get('[data-qa="address2"]').type(faker.location.street())
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type(faker.location.state())
        cy.get('[data-qa="city"]').type(faker.location.city())
        cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
        cy.get('[data-qa="mobile_number"]').type(faker.phone.number())
        cy.get('[data-qa="create-account"]').click()

        cy.url().should('includes', 'account_created')
        
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        return this
    }

    iniciarCadastro(email){
        cy.get('[data-qa="signup-name"]').type(faker.person.fullName())
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()
        return this
    }

    verificarSeCadastroFoiConcluido(){
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))
        return this
    }

    verificarSeEmailJaExiste(){
        cy.contains('Email Address already exist!')
        return this
    }
}

export default new Signup()