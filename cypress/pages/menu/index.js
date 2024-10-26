class Menu {
    irParaProdutos(){
        cy.contains('Products').click()
        return this
    }

    irParaLogout(){
        cy.get('a[href$=logout]').click()
        return this
    }

    irParaLogin(){
        cy.get('a[href$=login]').click() 
        return this
    }

    irParaDeleteAccount(){
        cy.get('a[href$=elete_account]').click()
        return this
    }
    irParaContactsUs(){
        cy.get('a[href$=contact_us]').click()
        return this
    }
    verificarSeTeveLogout(){
        cy.url().should('includes', 'login')
        return this
    }

    verificarSeTemNewUserSignup(){
        cy.contains('New User Signup!')
        return this
    }

    verificarSeTemloginToYourAccount(){
        cy.contains('Login to your account')
        return this
    }

}

export default new Menu()