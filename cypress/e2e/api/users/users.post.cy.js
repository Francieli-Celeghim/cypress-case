import UsersService from '../../../support/api/users/users.service'
import userSchema from '../../../fixtures/schemas/user.schema.json'
import Ajv from 'ajv'

const service = new UsersService()
const ajv = new Ajv()

describe('API - Users - POST', () => {
  it('Deve criar um usuário com schema válido', () => {
    const body = { name: "Fran Test", username: "fran", email: "fran@test.com" }

    service.createUser(body).then((response) => {
      expect(response.status).to.eq(201)

      const validate = ajv.compile(userSchema)
      const valid = validate(response.body)
      expect(valid, JSON.stringify(validate.errors)).to.be.true
    })
  })
})

