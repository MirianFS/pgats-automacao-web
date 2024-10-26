class Login {
    preencherLoging(usuario, senha){
        cy.get('[data-qa="login-email"]').type(usuario)
        cy.get('[data-qa="login-password"]').type(senha)
        cy.get('[data-qa="login-button"]').click()
        return this
    }
    
    verificarLoginBemSucedido(signUpName){
        cy.get('i.fa-user').parent().should('contain', signUpName)
        return this
    }

    verificarLoginMalSucedido(){
        cy.contains('Your email or password is incorrect!').should('exist')
        return this
    }
}

export default new Login()