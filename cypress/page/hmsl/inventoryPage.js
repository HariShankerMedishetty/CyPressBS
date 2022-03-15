class inventoryPage{
    elements = {
        titlespan: () => cy.get('.title')
    }
}

module.exports = new inventoryPage();