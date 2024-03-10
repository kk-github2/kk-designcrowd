/// <reference types="cypress" />
import 'C:/Users/kalai/Desktop/Cypress DC/cypress/support/commands.ts';

describe('Design page test', function () {
  it('Open the design in a new page', function () {
    // logged in user
    cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/00c784ed-daa2-406b-9d37-9a9576dffef9/templatetypes');
    
    cy.get('.swiper-slide-active > div.tw-h-full > section.tw-flex > .tw-flex > .tw-relative > .tw-w-full').click();
    //cy.get(':nth-child(2) > .tw-transition-shadow > .tw-block > :nth-child(1) > .tw-border-t > .tw-truncate')
    cy.get(':nth-child(2) > .tw-transition-shadow > .tw-block > :nth-child(1) > .tw-border-t').click();
    cy.get(':nth-child(4) > .modal > .modal-content > .tw-p-4.tw-flex > :nth-child(2) > .tw-font-sans > .tw-w-full > .tw-inline-flex > .tw-my-auto').click();
    
    cy.get('input[type=email]').clear().type('tech-challenge@kk.com')
      
      cy.get('input[type=password]').type('Challenge1')
      
      cy.get('.tw-w-full > .tw-inline-flex > .tw-my-auto').contains('Continue').click();
    cy.wait(3000);
      cy.url().should('include', '/editor');
      cy.log('User is in edit mode');

      cy.get('label > .tw-mb-0').clear().type('updating this field to check edit functions')

      cy.get('span[class="tw-my-auto tw-text-center"]').contains('Undo').click(); 
      cy.get('#Redo-49-title').contains('Redo').click({ force: true });
      
      cy.get('span[class="tw-my-auto tw-text-center"]').contains('Delete').click(); 
      cy.get('span[class="tw-my-auto tw-text-center"]').contains('Undo').click(); 

      cy.get('span[class="tw-my-auto tw-text-center"]').contains('SAVE PROGRESS').click(); 
          

  });
});


