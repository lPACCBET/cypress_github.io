describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('Верный пароль и верный логин', function () {  
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); //кнопка забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') //Инпут логин
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //Пользователь видит надпись восстановить пароль
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //Крестик

    })    
    
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio11');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('Неверный логин и верный пароль', function () { 
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germa@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
    
    it('Неверный логин без @ и верный пароль (Проверка валидации)', function () {   
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germadolnikov.ru');  
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');

    })

    it('Неверный логин (проверка регистра) и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');  
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })
})







// 1. +Найти поле логин и ввести верный логин
// 2. +Найти поле пароль и ввести верный пароль
// 3. +Найти кнопку Войти и нажать на неё
// 4. Проверить, что авторизация прошла успешно