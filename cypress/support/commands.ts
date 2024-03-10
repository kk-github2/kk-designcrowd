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
/*
Cypress.Commands.add('clickMyAccount', () => {
    cy.visit('https://www.brandcrowd.com');
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
/*
declare global {
    namespace Cypress {
        interface Chainable {
            isVisible: () => Chainable<boolean>;
        }
    }
}

Cypress.Chainable.prototype.isVisible = function () {
    return cy.wrap(this).then(($el) => {
        return $el.is(':visible');
    });
};
*/

declare namespace Cypress {
    interface Chainable {
      checkInstagramCheckbox(): Chainable<Element>;
    }
  }
  
  Cypress.Commands.add('checkInstagramCheckbox', () => {
    cy.get('div[class="tw-w-60"] div div div[class="tw-container tw-px-0 tw-mx-auto"] div[class="tw-flex tw-flex-col tw-pb-5"] div div div[id="Instagram Container"] div div[class="tw-flex tw-py-2 tw-items-center tw-cursor-pointer tw-py-1.5"] span[class="checkbox__unchecked"]')
      .should('exist')
      .click();
  });