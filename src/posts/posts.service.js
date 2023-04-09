const knex = require('../db/connection');

function list() {
  return knex('posts').select('*');
}

function create(post) {
  return knex('posts')
    .insert(post)
    .returning('*')
    .then((createdRecords) => createdRecords[0]);
}

function read(post_id) {
  return knex('posts').select('*').where({ post_id }).first();
}

// Updating a post
function update(updatedPost) {
  return knex('posts')
    .select('*')
    .where({ post_id: updatedPost.post_id })
    .update(updatedPost, '*')
    .then((updatedRecords) => updatedRecords[0]);
}

// Destroying a post
function destroy(post_id) {
  return knex('posts').where({ post_id }).del();
}

module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
};
