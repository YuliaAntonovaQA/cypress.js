describe('Проверка авторизации', function () {

    it('верный логин и пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

it('логика восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    
     })
     
     it('верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('11iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

         it('неверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('qagerman@dolnikov.ru');
            cy.get('#pass').type('11iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
             })

             it('логин без @ и верный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('qagermandolnikov.ru');
                cy.get('#pass').type('11iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); 
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                 })

                 it('строчная буква в логине', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('GerMan@Dolnikov.ru');
                    cy.get('#pass').type('11iLoveqastudio1');
                    cy.get('#loginButton').click();
                    cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                     })
})