describe("Helpers...", () => {
    it('Wrap', () => {
        const obj = {nome: 'user', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')


        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($el => {
            cy.wrap($el).type('funcionando via cypress')
        })

        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve('promise resolved')
            }, 600)
        })
        cy.get('#buttonSimple').then(()=> console.log('Encontrei o primeiro botão0') )
        cy.get('#buttonList').then(()=> console.log('Encontrei o segundo botão') )
    })
    
}) 