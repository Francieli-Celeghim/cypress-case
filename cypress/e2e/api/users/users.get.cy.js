import UsersService from '../../../support/api/users/users.service'
import userSchema from '../../../fixtures/schemas/user.schema.json'
import Ajv from 'ajv'

const service = new UsersService()
const ajv = new Ajv()

describe('API - Users - GET', () => {
  it('Deve retornar lista de usuários com schema válido', () => {
    service.getUsers().then((response) => {
      expect(response.status).to.eq(200)

      const validate = ajv.compile(userSchema)
      response.body.forEach(user => {
        const valid = validate(user)
        expect(valid, JSON.stringify(validate.errors)).to.be.true
      })
    })
  })
})

