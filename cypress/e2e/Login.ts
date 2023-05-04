import { LoginPage } from '../../cypress/PageObjects/LoginPage'
const login = new LoginPage;

    it("Login test",function()  {
        cy.visit('/')
        login.openSignUp();
        login.signUpAndLogin();
    })


