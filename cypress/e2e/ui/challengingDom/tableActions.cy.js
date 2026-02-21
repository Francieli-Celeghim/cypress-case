import page from '../../../support/pages/challengingDom'

describe('Challenging DOM - Tabela', () => {
  beforeEach(() => {
    cy.visit('/challenging_dom')
  })

  it('Clica em edit em todas as linhas', () => {
    page.clicarEditEmTodasLinhas()
  })

  it('Clica em delete em todas as linhas', () => {
    page.clicarDeleteEmTodasLinhas()
  })
})
