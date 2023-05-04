export class LoginScreen{
    url: string
    title: string
    mailInputSelector:  string
    passInputSelector: string
    submitBtnSelector: string
    constructor(){
        this.url = "/index.php?route=account/login",
        this.title = "Account Login",
        this.mailInputSelector= '[data-cy=login-email]',
        this.passInputSelector=  '[data-cy=login-password]',
        this.submitBtnSelector= '[data-cy=login]'
    }
    
}
