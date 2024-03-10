/// <reference types="cypress" />
import 'C:/Users/kalai/Desktop/Cypress DC/cypress/support/commands.ts';
describe ('Search page test', function()
{
it('Open the new logo search page', function()
{
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
      cy.checkInstagramCheckbox();

});
}
)











