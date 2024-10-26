class Delete {
    verificarDeleteAccount(){
        cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!')
        return this
    }

    clicarNoBotaoContinue(){
        cy.get('[data-qa="continue-button"]').click()
        return this
    }
}

export default new Delete()