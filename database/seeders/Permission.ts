import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permission from 'App/Models/Permission'

export default class PermissionSeeder extends BaseSeeder {
  public async run() {
    await Permission.createMany([
      {
        name: 'read_self',
        description: 'Can see your information',
      },
      {
        name: 'update_self',
        description: 'Can update your data',
      },
      {
        name: 'delete_self',
        description: 'Can delete yourself',
      },
      {
        name: 'create_user',
        description: 'Can create a common user',
      },
      {
        name: 'read_user',
        description: 'Can read user data',
      },
      {
        name: 'update_user',
        description: 'Can update user data',
      },
      {
        name: 'delete_user',
        description: 'Can delete a common user',
      },
      {
        name: 'create_anyone',
        description: 'Can create any type of user',
      },
    ])
  }
}
