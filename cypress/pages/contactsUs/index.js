class ContactsUs {
    preencherContactUs(){
        cy.get('[data-qa="name"]').type('Tester QA')
        cy.get('[data-qa="email"]').type('teste@testeQA.com')
        cy.get('[data-qa="subject"]').type('subject')
        cy.get('[name="upload_file"]').selectFile('./cypress/fixtures/image.png')
        cy.get('[data-qa="submit-button"]').click()
        return this
    }

    verificarSeTemGetInTouch(){
        cy.contains('Get In Touch')
        return this
    }

    verificarSeTemMensagemDeSucesso(){
        cy.contains('Success! Your details have been submitted successfully.')
        return this
    }

    clickBotaoHome(){
        cy.get('#form-section > .btn').click()
        return this
    }
    verificarUrl(){
        cy.url().should('include', '/')
        return this
    }

}

export default new ContactsUs()