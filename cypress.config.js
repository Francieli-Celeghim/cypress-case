const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com', // usado pelos testes de UI
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    env: {
      apiUrl: 'https://jsonplaceholder.typicode.com' // usado pelos testes de API
    }
  }
})

