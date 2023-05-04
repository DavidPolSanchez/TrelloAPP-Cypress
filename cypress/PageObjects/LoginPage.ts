import { LoginScreen } from '../PageObjects/Screens/LoginScreen';

 export class LoginPage{
    loginScreen = new LoginScreen()
    
    constructor(){
    }
    openSignUp(){
        cy.get('[data-cy=login-menu]').click()
        cy.contains('Sign up here').click()
    }
    signUpAndLogin(){
        
        cy.get('[data-cy=signup-email]').type('david@gmail.com')
        cy.get('[data-cy=signup-password]').type('1234')
        cy.get('[data-cy=signup]').click()
        cy.contains('Go to log in').click()
        cy.get('[data-cy=login-email]').type('david@gmail.com')
        cy.get('[data-cy=login-password]').type('1234')
        cy.get('[data-cy=login]').click()
    }
    
}
