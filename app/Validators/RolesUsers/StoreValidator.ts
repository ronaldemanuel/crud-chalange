import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {
    return
  }

  public schema = schema.create({
    id: schema.number([rules.required()]),
  })

  public messages = {
    'id.required': 'É obrigatório passar o id do papel',
  }
}
