import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'
import User from 'App/Models/User'
import StoreValidator from 'App/Validators/RolesUsers/StoreValidator'
import UpdateValidator from 'App/Validators/RolesUsers/UpdateValidator'

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

  public async store({ params, response, request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    try {
      const user = await User.findOrFail(params.user_id)
      const role = await Role.findOrFail(data.id)

      user.related('roles').attach([role.id])
    } catch (error) {
      return response.status(404).send({ error: 'object not found' })
    }
  }
}
