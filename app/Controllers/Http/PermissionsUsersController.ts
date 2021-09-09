import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
export default class PermissionsUsersController {
  public async index({ params, response }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.user_id)
      const permissions = await user.related('permissions').query()

      return permissions
    } catch (error) {
      return response.status(404).send({ error: 'relation not found' })
    }
  }

}
