# Cypress Case – Challenging DOM

Projeto de automação de testes E2E utilizando **Cypress**, aplicado na página
**Challenging DOM** do site The Internet.

## 🧪 Tecnologias
- Node.js
- Cypress
- JavaScript
- Page Object Model (POM)

## 📁 Estrutura do Projeto
cypress-case/
├─ cypress/
│ ├─ e2e/
│ │ └─ ui/
│ │ └─ challengingDom/
│ │ ├─ buttons.cy.js
│ │ └─ tableActions.cy.js
│ └─ support/
│ ├─ pages/
│ │ └─ challengingDom/
│ │ ├─ elements.js
│ │ └─ index.js
│ ├─ commands.js
│ └─ e2e.js
├─ package.json
├─ cypress.config.js
└─ README.md

## ▶️ Como rodar o projeto
1. Instale as dependências:
```bash
npm install

## Abrir o Cypress:
npx cypress open

## Para rodar o cypress 
npx cypress run

# Node
node_modules/

# Cypress
cypress/videos/
cypress/screenshots/
.cypress.env.json

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Sistema
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
