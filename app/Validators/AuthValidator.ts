import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthValidator {
  constructor(protected ctx: HttpContextContract) {
    return
  }

  public schema = schema.create({
    email: schema.string({ }, [rules.required(), rules.email()]),
    password: schema.string({ }, [rules.required(), rules.minLength(8)]),
  })

  public messages = {
    'email.required': 'O campo email é obrigatório',
    'email.email': 'O campo deve conter um endereço de email válido',
    'password.required': 'O campo password é obrigatório',
    'password.minLenth': 'A senha deve ter no mínimo 8 caracteres',
  }
}
