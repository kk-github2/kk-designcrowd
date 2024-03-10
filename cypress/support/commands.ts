
declare namespace Cypress {
    interface Chainable {
      checkInstagramCheckbox(): Chainable<Element>;
      clickImageBySrc(src:"https://dynamic.brandcrowd.com/asset/logodraft/00c784ed-daa2-406b-9d37-9a9576dffef9?v=4&dimensionsType=logo_1280_1024&outputFormat=png&s=mvrhiHobT1e4Q4WU9IrJH4NSFn4w2Ct2z28gcOiiBnI%3d"): Chainable<Element>;
      downloadPdf(url: string, fileName: string): Chainable<void>;
    }
  }
  
  Cypress.Commands.add('checkInstagramCheckbox', () => {
    cy.get('div[class="tw-w-60"] div div div[class="tw-container tw-px-0 tw-mx-auto"] div[class="tw-flex tw-flex-col tw-pb-5"] div div div[id="Instagram Container"] div div[class="tw-flex tw-py-2 tw-items-center tw-cursor-pointer tw-py-1.5"] span[class="checkbox__unchecked"]')
      .should('exist')
      .click();
  });

  Cypress.Commands.add('clickImageBySrc', { prevSubject: 'element' }, (subject: JQuery, src: string) => {
    cy.wrap(subject).find(`img[src="${src}"]`).click();
    // cy.get('img[src="https://dynamic.brandcrowd.com/asset/logodraft/00c784ed-daa2-406b-9d37-9a9576dffef9?v=4&dimensionsType=logo_1280_1024&outputFormat=png&s=mvrhiHobT1e4Q4WU9IrJH4NSFn4w2Ct2z28gcOiiBnI%3d"]').click();
  });

  // Error handling
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error to the console
    console.error('Uncaught Exception:', err.message);
  
    // Return false to prevent Cypress from failing the test
    return false;
  });

// custom command for download test

Cypress.Commands.add('downloadPdf', (url: string, fileName: string) => {
    cy.request({ url, encoding: 'base64' }).then((response) => {
     
      expect(response.headers['content-type']).to.include('application/pdf');
  
      // Save the PDF file
      cy.writeFile(fileName, response.body, 'base64');
    });
  });
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
