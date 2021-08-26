import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {
    return
  }

  public schema = schema.create({
    userName: schema.string({}, [rules.required(), rules.minLength(2)]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({}, [rules.required(), rules.minLength(8)]),
  })

  public messages = {
    'userName.required': 'O campo userName é obrigatório',
    'userName.minLengh': 'O campo userName deve ter no mínimo 2 caracteres',
    'email.required': 'O campo email é obrigatório',
    'email.email': 'O campo deve conter um endereço de email válido',
    'email.unique': 'O endereço de email já existe',
    'password.required': 'O campo password é obrigatório',
    'password.minLength': 'A senha deve ter no mínimo 8 caracteres',
  }
}
