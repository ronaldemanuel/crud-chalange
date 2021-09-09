import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'

export default class PermissionsRolesController {
  public async index({ params, response }: HttpContextContract) {
    try {
      const role = await Role.findOrFail(params.roles_id)
      const permissions = await role.related('permissions').query()

      return permissions
    } catch (error) {
      return response.status(404).send({ error: 'relation not found' })
    }
  }

}
