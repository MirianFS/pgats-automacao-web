class Products {
    preencherContactUs(){
        cy.get('[data-qa="name"]').type('Tester QA')
        cy.get('[data-qa="email"]').type('teste@testeQA.com')
        cy.get('[data-qa="subject"]').type('subject')
        cy.get('[name="upload_file"]').selectFile('./cypress/fixtures/image.png')
        cy.get('[data-qa="submit-button"]').click()
        return this
    }

    verificarSeTemAllProductsNoTitulo(){
        cy.get('.title')
            .should('be.visible')
            .and('contain', 'All Products')
        return this
    }

    verificarSeTemMensagemDeSucesso(){
    cy.contains('Success! Your details have been submitted successfully.')
    return this
    }

    clickBotaoHome(){
        cy.get('#form-section > .btn').click() // verificar de deveriar ser o botão home
        return this
    }
    verificarUrl(){ // melhorar nome do metodo
        cy.url().should('contain',  'products')
        return this
    }

    clicarNoPrimeiroProduto(){
        cy.get('.single-products')
        .should('be.visible')
        .and('have.length.at.least', 1)
        .first()
        .parent()
        .contains('View Product')
        .click()
        return this
    }

    verificarDadosDoProduto(){
        cy.get('.product-information p').should('be.visible').and('have.length', 4);
        cy.get('.product-information span span').should('be.visible')
        return this
    }

    buscarProdutos(produto){
        cy.get('input#search_product').type(produto)
        cy.get('button#submit_search').click()
        return this
    }

    verificarSeRetornouProdutosBuscado(){
        cy.get('.title').should('be.visible').and('contain', 'Searched Products');
        cy.get('.single-products').should('be.visible').and('have.length.at.least', 1)
        return this
    }

}

export default new Products()