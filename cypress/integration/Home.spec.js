
describe('Pruebas en el Home', () => {

  beforeEach(() => {
    cy.visit('https://juancr5.github.io/Old_Wave-React-Front/')
  })

  it('Boton de Registro o Inicio de Sesion ', () => {
    //cy.contains('Regístrate o inicia sesión').click().should('not.have.focus')
    cy.contains('Regístrate o inicia sesión')
      .click().should('have.focus')
    cy.contains('Regístrate o inicia sesión').should('be.visible')

  })

  it('Campo de Busqueda ', () => {
    cy.get('.css-yz9k0d-MuiInputBase-input')
      .type('Iphone')
    cy.get('.css-yz9k0d-MuiInputBase-input')
      .should('have.value', 'Iphone')
  })

  it('Swipper Banner', () => {
    cy.clock()
    cy.get('.Swiper-1')
      .click()
    cy.tick(1000)
    cy.get('.Swiper-2')
      .click()

  })

  it('Que estas buscando', () => {
    cy.contains('¿Qué estás buscando hoy?')
      .should('have.css', 'color', 'rgb(119, 44, 232)')
      .should('have.css', 'font-size', '35px')
  })


  it('Tarjeta De Promocion ', () => {
    cy.get('[class="MuiGrid-root MuiGrid-container css-b8czy3-MuiGrid-root"]')
      .should('have.css', 'display', 'flex')
      .should('have.css', 'position', 'static')

  })

  /*
  it('displays two todo items by default', () => {
 
    cy.get('.todo-list li').should('have.length', 2)
  })
  */

})
