// eslint-disable-next-line func-names
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('schedules', table => {
      table.increments('id').primary();
      table.dateTime('start');
      table.dateTime('end');
      table
        .integer('activity_id')
        .unsigned()
        .notNullable();
      table
        .integer('room_id')
        .unsigned()
        .notNullable();
    }),
  ]);
};

// eslint-disable-next-line func-names
exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('schedules')]);
};
