import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class RoleSeeder extends BaseSeeder {
  public async run() {
    await Role.createMany([
      {
        slug: 'global',
        name: 'Global',
        description: 'Has all permissions',
      },
      {
        slug: 'admin',
        name: 'Administrator',
        description:
          'Has common user creation permissions. Reading, updating and deleting both the common and the same',
      },
      {
        slug: 'user',
        name: 'User',
        description: 'Can perform actions with himself',
      },
    ])
  }
}
