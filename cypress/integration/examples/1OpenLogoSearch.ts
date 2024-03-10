/// <reference types="cypress" />
describe ('Pilot test', function()
{
it('Open the new logo search page', function()
{
    cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/00c784ed-daa2-406b-9d37-9a9576dffef9/templatetypes')
    cy.get('.tw-cursor-pointer').eq(0).contains(' My Account ').click();
});
}
)











