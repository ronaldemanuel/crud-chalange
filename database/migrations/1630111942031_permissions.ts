import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Permissions extends BaseSchema {
  protected tableName = 'permissions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable().unique()
      table.text('description').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
