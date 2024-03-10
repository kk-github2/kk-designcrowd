/// <reference types="cypress" />
import 'C:/Users/kalai/Desktop/Cypress DC/cypress/support/commands.ts';
describe ('Pilot test', function()
{
it('Open the new logo search page', function()
{
/*    cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/00c784ed-daa2-406b-9d37-9a9576dffef9/templatetypes'),
                  cy.get('span[class="tw-mr-2 tw-pointer-events tw-hidden md:tw-block"]').trigger('mouseover');
             cy.get('a[class="tw-justify-center tw-font-sans tw-inline-flex tw-cursor-pointer tw-border-2 tw-font-bold tw-text-white tw-uppercase tw-border-solid tw-transition-colors tw-duration-300 tw-no-underline tw-text-xs tw-py-1 tw-px-2 tw-w-full tw-rounded tw-bg-primary-500 tw-border-primary-500 hover:tw-border-primary-700 hover:tw-bg-primary-600"] span[class="tw-my-auto tw-text-center"]').click({ force: true });
cy.get('span[class="tw-mr-2 tw-pointer-events tw-hidden md:tw-block"]).contains('My account').click();

             */


      //not logged in
      cy.visit('https://www.brandcrowd.com'),
      cy.get('span[class="tw-mr-0 tw-text-white"]').click();
      cy.get('input[type=email]').type('tech-challenge@kk.com')
      cy.get('.tw-w-full').contains('Login').click();
      cy.get('input[type=password]').type('Challenge1')
      cy.get('.tw-w-full').contains('Login').click();
      cy.wait(5000);
      cy.get('span[class="tw-my-auto tw-text-center"]').contains('Create new design').click();
      cy.wait(2000);
      //cy.get('a[href="/maker/mydesigns"]').click();
     // cy.wait(4000);
      cy.get("#searchTerm").type('birthday');
      cy.get('.tw-flex-col > :nth-child(2) > .tw-font-sans > .tw-w-full > .tw-inline-flex > .tw-my-auto').click({ multiple: true } as Cypress.ClickOptions);
      cy.wait(2000);
      //cy.get('span[class="tw-mr-3 tw-mb-0"]',{timeout:3000}).should('be.visible').log('Element found, proceeding to click').click();
      cy.checkInstagramCheckbox();

});
}
)











