/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import signup from '../pages/signup';
import login from '../pages/login';
import menu from '../pages/menu';
import contactsUs from '../pages/contactsUs';
import deleteAccount from '../pages/delete';
import products from '../pages/products';
import subscription from '../pages/subscription';
import home from '../pages/home';
import cart from '../pages/cart';
import payment from '../pages/payment';

describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Test Case 1: Register User', () => {
        menu
            .irParaLogin()
            .verificarSeTemNewUserSignup()
        signup
            .preencherFormulario()
            .verificarSeCadastroFoiConcluido()
        menu.irParaDeleteAccount()
        deleteAccount
            .verificarDeleteAccount()
            .clicarNoBotaoContinue()
    })

    it('Test Case 2: Login User with correct email and password', () => {
        let name = faker.person.fullName()
        let email = faker.internet.email()
        let senha = faker.internet.password()
        
        menu.irParaLogin()
        signup.preencherFormulario(name, email, senha)
        menu.irParaLogout()

        menu
        .irParaLogin()
        .verificarSeTemloginToYourAccount()
        login
            .preencherLoging(email, senha)
            .verificarLoginBemSucedido(name)
        menu.irParaDeleteAccount()
        deleteAccount.verificarDeleteAccount()        
    })

    it('Test Case 3: Login User with incorrect email and password', () => {
        let email = faker.internet.email()
        let senha = faker.internet.password()
        
        menu
            .irParaLogin()
            .verificarSeTemloginToYourAccount()
        login
            .preencherLoging(email, senha)
            .verificarLoginMalSucedido() 
    })

    it('Test Case 4: Logout User', () => {
        let name = faker.person.fullName()
        let email = faker.internet.email()
        let senha = faker.internet.password()
        menu.irParaLogin()
        signup.preencherFormulario(name, email, senha)
        menu.irParaLogout()

        menu
            .irParaLogin()
            .verificarSeTemloginToYourAccount()
        login
            .preencherLoging(email, senha)
            .verificarLoginBemSucedido(name)
        menu
            .irParaLogout()
            .verificarSeTeveLogout()
    })

    it('Test Case 5: Register User with existing email', () => {
        menu
            .irParaLogin()
            .verificarSeTemNewUserSignup()
        signup
            .iniciarCadastro('test@test.com')
            .verificarSeEmailJaExiste()
    })

    it('Test Case 6: Contact Us Form', () => {
        menu.irParaContactsUs()
        contactsUs
            .verificarSeTemGetInTouch()
            .preencherContactUs()
            .verificarSeTemMensagemDeSucesso()
            .verificarUrl()
    })

    it('Test Case 8: Verify All Products and product detail page', () => {
        menu.irParaProdutos()
        products
            .verificarUrl()
            .verificarSeTemAllProductsNoTitulo()
            .clicarNoPrimeiroProduto()
            .verificarDadosDoProduto()
    })

    it('Test Case 9: Search Product', () => {
        menu.irParaProdutos()
        products
            .verificarSeTemAllProductsNoTitulo()
            .buscarProdutos('Shirt')
            .verificarSeRetornouProdutosBuscado()
    })

    it('Test Case 10: Verify Subscription in home page', () => {
        subscription
            .preencherSubscription()
            .verificarSeSubcriptionFoiRealizada()
    })

    it('Test Case 15: Place Order: Register before Checkout', () => {
        menu.irParaLogin()
        signup.preencherFormulario()
        home
            .clicarEmViewCard()
            .clicarEmBotaoCheckout()
        cart
            .verificarTitulos()
            .adicionarComentario()
        payment
            .preencherFormulario()
            .verificarSeCadastroFoiConcluido()
        menu.irParaDeleteAccount()
        deleteAccount
            .verificarDeleteAccount()
            .clicarNoBotaoContinue()
    })
})