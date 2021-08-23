import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreValidator from 'App/Validators/User/StoreValidator'

export default class UsersController {
  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await User.create(data)
    return user
  }
}
