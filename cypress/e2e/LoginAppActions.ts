it('',()=>{
    cy.visit('/')
    cy.window().then(({app})=>{
        console.log("i'm here :"+app)
        app.loggedIn.active = true
        app.loggedIn.email = ''
    })
})