import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Permission from 'App/Models/Permission'
import User from 'App/Models/User'
import StoreValidator from 'App/Validators/PermissionsUsers/StoreValidator'

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

  public async store({ params, request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    try {
      const user = await User.findOrFail(params.user_id)
      const permission = await Permission.findOrFail(data.id)

      user.related('permissions').attach([permission.id])
    } catch (error) {
      return response.status(404).send({ error: 'object not found' })
    }
  }
}
