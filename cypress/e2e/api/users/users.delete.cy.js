import UsersService from '../../../support/api/users/users.service'

const service = new UsersService()

describe('API - Users - DELETE', () => {
  it('Deve deletar um usuário', () => {
    service.deleteUser(1).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.deep.eq({})
    })
  })
})

