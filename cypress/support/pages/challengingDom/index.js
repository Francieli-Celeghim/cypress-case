import { elements } from './elements'

class ChallengingDomPage {

  // 🔵🔴🟢 botões do topo (continua igual)
  clicarBotaoAzul() {
    cy.get(elements.botaoAzul).click()
  }

  clicarBotaoVermelho() {
    cy.get(elements.botaoVermelho).click()
  }

  clicarBotaoVerde() {
    cy.get(elements.botaoVerde).click()
  }

  // ✏️ Clicar em EDIT em todas as linhas
  clicarEditEmTodasLinhas() {
    cy.get(elements.linhasTabela).each(($linha) => {
      cy.wrap($linha)
        .find(elements.botaoEdit)
        .click()
    })
  }

  // 🗑️ Clicar em DELETE em todas as linhas
  clicarDeleteEmTodasLinhas() {
    cy.get(elements.linhasTabela).each(($linha) => {
      cy.wrap($linha)
        .find(elements.botaoDelete)
        .click()
    })
  }
}

export default new ChallengingDomPage()



