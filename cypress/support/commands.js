// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.ts

// typescript
// cypress/support/commands.ts

// Custom Cypress command to click 'My account' on www.brandcrowd.com
Cypress.Commands.add('clickMyAccount', () => {
    cy.get('#__layout > div > div > div.o-main > section:nth-child(2) > div > div:nth-child(2) > div > div > div.swiper-container.swiper-container-initialized.swiper-container-horizontal > div > div.swiper-slide.swiper-slide-active > div > section > a > figure > img').click();
   });

/*
cy.visit('https://www.brandcrowd.com')
    cy.get('.tw-cursor-pointer').contains(' My Account ').click({force: true});
    cy.get('input[type=email]').type('tech-challenge@kk.com')
    cy.get('.tw-w-full').contains('Login').click({force: true});
    cy.get('input[type=password]').type('Challenge1')
    cy.get('.tw-w-full').contains('Login').click({force: true});
Commands
Cypress.Commands.login = (username, password) => {
    cy.get('.tw-cursor-pointer').contains(' My Account ').click({ force: true });
    cy.get('input[type=email]').type('tech-challenge@kk.com')
    cy.get('.tw-w-full').contains('Login').click({ force: true });
    cy.get('input[type=password]').type('Challenge1')
    cy.get('.tw-w-full').contains('Login').click({ force: true });

}

Cypress.Commands.launchPage = (url) => {
    cy.visit('https://www.brandcrowd.com')
}
*/