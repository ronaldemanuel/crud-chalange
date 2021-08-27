import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from 'App/Validators/AuthValidator'

export default class AuthController {
  public async store({ auth, request, response }: HttpContextContract) {
    const { email, password } = await request.validate(AuthValidator)

    try {
      const token = await auth.use('api').attempt(email, password, { expiresIn: '7days' })
      return { token: token, user: token.user }
    } catch (error) {
      return response.badRequest('Invalid data')
    }
  }
}
