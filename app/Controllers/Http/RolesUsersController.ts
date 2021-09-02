import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class RoleUsersController {
  public async index({ params, response }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.user_id)
      const roles = await user.related('roles').query()

      return roles
    } catch (error) {
      return response.status(404).send({ error: 'relation not found' })
    }
  }
}
