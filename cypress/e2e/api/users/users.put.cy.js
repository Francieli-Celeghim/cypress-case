import UsersService from '../../../support/api/users/users.service'
import userSchema from '../../../fixtures/schemas/user.schema.json'
import Ajv from 'ajv'

const service = new UsersService()
const ajv = new Ajv()

describe('API - Users - PUT', () => {
  it('Deve atualizar um usuário com schema válido', () => {
    const body = { name: "Fran Updated", username: "fran", email: "fran@test.com" }

    service.updateUser(1, body).then((response) => {
      expect(response.status).to.eq(200)

      const validate = ajv.compile(userSchema)
      const valid = validate(response.body)
      expect(valid, JSON.stringify(validate.errors)).to.be.true
    })
  })
})

