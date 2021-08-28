import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permission from 'App/Models/Permission'

export default class PermissionSeeder extends BaseSeeder {
  public async run() {
    await Permission.createMany([
      {
        slug: 'read_self',
        name: 'Read self',
        description: 'Can see your information',
      },
      {
        slug: 'update_self',
        name: 'Update self',
        description: 'Can update your data',
      },
      {
        slug: 'delete_self',
        name: 'Delete self',
        description: 'Can delete yourself',
      },
      {
        slug: 'create_user',
        name: 'Create user',
        description: 'Can create a common user',
      },
      {
        slug: 'read_user',
        name: 'Read user',
        description: 'Can read user data',
      },
      {
        slug: 'update_user',
        name: 'Update user',
        description: 'Can update user data',
      },
      {
        slug: 'delete_user',
        name: 'Delete user',
        description: 'Can delete a common user',
      },
      {
        slug: 'create_anyone',
        name: 'Create anyone',
        description: 'Can create any type of user',
      },
    ])
  }
}
