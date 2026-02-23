class UsersService {
  getUsers() {
    return cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}/users`
    })
  }

  createUser(user) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/users`,
      body: user
    })
  }

  updateUser(id, user) {
    return cy.request({
      method: 'PUT',
      url: `${Cypress.env('apiUrl')}/users/${id}`,
      body: user
    })
  }

  deleteUser(id) {
    return cy.request({
      method: 'DELETE',
      url: `${Cypress.env('apiUrl')}/users/${id}`
    })
  }
}

export default UsersService


