import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class RoleSeeder extends BaseSeeder {
  public async run() {
    await Role.createMany([
      {
        name: 'global',
        description: 'Has all permissions',
      },
      {
        name: 'admin',
        description:
          'Has common user creation permissions. Reading, updating and deleting both the common and the same',
      },
      {
        name: 'user',
        description: 'Can perform actions with himself',
      },
    ])
  }
}
