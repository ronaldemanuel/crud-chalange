import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  // eslint-disable-next-line prettier/prettier
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    userName: schema.string({}, [rules.required(), rules.minLength(2)]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({}, [rules.required(), rules.minLength(8)]),
  })

  public messages = {}
}
