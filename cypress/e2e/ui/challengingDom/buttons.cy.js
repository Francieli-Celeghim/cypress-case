import page from '../../../support/pages/challengingDom'

describe('Challenging DOM - Botões', () => {
  beforeEach(() => {
    cy.visit('/challenging_dom')
  })

  it('Clica nos botões do topo', () => {
    page.clicarBotaoAzul()
    page.clicarBotaoVermelho()
    page.clicarBotaoVerde()
  })
})

