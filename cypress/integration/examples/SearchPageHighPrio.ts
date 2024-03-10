/// <reference types="cypress" />
describe ('Pilot test', function()
{
it('Open the new logo search page', function()
{
    cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/00c784ed-daa2-406b-9d37-9a9576dffef9/templatetypes'),
    //cy.get('span[data-test-my-logos-nav]').should('be.visible', { timeout: 10000 }).trigger('mouseover');
  
              //cy.get('span[data-v-60789f99]').first().trigger('mouseover').{force: true},  
              //cy.get('.tw-cursor-pointer').contains("My account").trigger('mouseover');
              //cy.get('.tw-cursor-pointer').eq(0).contains(' My Account ').click();
              cy.get('span[class="tw-mr-2 tw-pointer-events tw-hidden md:tw-block"]').trigger('mouseover');
              
      //cy.get('span[class="tw-my-auto tw-text-center"]').scrollIntoView().click();  
      cy.get('a[class="tw-justify-center tw-font-sans tw-inline-flex tw-cursor-pointer tw-border-2 tw-font-bold tw-text-white tw-uppercase tw-border-solid tw-transition-colors tw-duration-300 tw-no-underline tw-text-xs tw-py-1 tw-px-2 tw-w-full tw-rounded tw-bg-primary-500 tw-border-primary-500 hover:tw-border-primary-700 hover:tw-bg-primary-600"] span[class="tw-my-auto tw-text-center"]')
  .click({ force: true });
      

});
}
)











