exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('post_id').primary();
    table.string('title');
    table.string('message');
    table.string('creator');
    table.specificType('tags', 'text ARRAY');
    table.specificType('location', 'text ARRAY');
    table.text('selectedFile');
    table.integer('likeCount').defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('posts');
};
