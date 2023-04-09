exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('post_id').primary();
    table.string('title');
    table.string('message');
    table.string('creator');
    table.string('latitude');
    table.string('longitude');
    table.specificType('tags', 'text ARRAY');
    table.text('selectedFile');
    table.integer('likeCount').defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('posts');
};
