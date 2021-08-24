import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {
    return
  }

  public schema = schema.create({
    userName: schema.string.optional({}, [rules.minLength(2)]),
    email: schema.string.optional({}, [rules.email()]),
    password: schema.string.optional({}, [rules.minLength(8)]),
  })

  public messages = {
    'userName.minLengh': 'O campo userName deve ter no mínimo 2 caracteres',
    'email.email': 'O campo deve conter um endereço de email válido',
    'email.unique': 'O endereço de email já existe',
    'password.minLength': 'A senha deve ter no mínimo 8 caracteres',
  }
}
