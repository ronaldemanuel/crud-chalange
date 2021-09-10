import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Permission from 'App/Models/Permission'
import Role from 'App/Models/Role'
import StoreValidator from 'App/Validators/PermissionsRoles/StoreValidator'

export default class PermissionsRolesController {
  public async index({ params, response }: HttpContextContract) {
    try {
      const role = await Role.findOrFail(params.role_id)
      const permissions = await role.related('permissions').query()

      return permissions
    } catch (error) {
      return response.status(404).send({ error: 'relation not found' })
    }
  }

  public async store({ params, request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    try {
      const role = await Role.findOrFail(params.role_id)
      const permission = await Permission.findOrFail(data.id)

      role.related('permissions').attach([permission.id])
    } catch (error) {
      return response.status(404).send({ error: 'object no found ' })
    }
  }
}
