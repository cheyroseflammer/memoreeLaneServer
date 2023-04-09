const posts = require('../fixtures/posts');

exports.seed = function (knex) {
  return knex.raw('TRUNCATE TABLE posts RESTART IDENTITY CASCADE').then(function () {
    return knex('posts').insert(posts);
  });
};
