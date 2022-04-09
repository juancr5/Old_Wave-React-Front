
describe('Pruebas en el Home', () => {

  beforeEach(() => {
    cy.visit('https://dsxsp9m6rfxo8.cloudfront.net')
  })

  it('Boton de Registro o Inicio de Sesion ', () => {
    //cy.contains('Regístrate o inicia sesión').click().should('not.have.focus')
    cy.contains('Regístrate o inicia sesión')
      .click().should('have.focus')
    cy.contains('Regístrate o inicia sesión').should('be.visible')

  })

  it('Campo de Busqueda ', () => {
    cy.get('.css-mnn31')
      .type('Iphone')
    cy.get('.css-mnn31')
      .should('have.value', 'Iphone')
  })

  it('Que estas buscando', () => {
    cy.contains('¿Qué estás buscando hoy?')
      .should('have.css', 'color', 'rgb(119, 44, 232)')
      .should('have.css', 'font-size', '35px')
  })

  /*
  it('displays two todo items by default', () => {
 
    cy.get('.todo-list li').should('have.length', 2)
  })
  */

})
