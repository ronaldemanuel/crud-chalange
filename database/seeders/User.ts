import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        userName: 'jorjinDaMassa',
        email: 'jorjin@email.com',
        password: '12345678',
      },
      {
        userName: 'clyeton',
        email: 'cleyton@email.com',
        password: '12345678',
      },
      {
        userName: 'adamastor',
        email: 'adamastor@email.com',
        password: '12345678',
      },
    ])
  }
}
