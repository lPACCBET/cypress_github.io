describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.get('.auth__button').click();
        cy.get('.header__container > .header__id').click();
        cy.get('[href="/shop"]').click();
        cy.get('.available > button').first().click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');    //номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1025');    //срок
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');     //ccv код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('EISCOV ALEXEY');      //имя держателя карты
        cy.get('.pay-btn').click();   //оплатить
        cy.get('#cardnumber').type('56456');  //Код из смс
        cy.get('.payment__submit-button').click(); //кнопка оплатить/отправить
        cy.get('.payment__font-for-success').should('be.visible'); //надпись "Покупка прошла успешно"
        cy.get('.payment__adv').click(); //Кнопка вернуться в магазин


        

    })

})