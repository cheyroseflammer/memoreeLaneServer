const postsService = require('./posts.service');
const hasProperties = require('../errors/hasProperties');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

const VALID_PROPERTIES = [
  'title',
  'message',
  'creator',
  'tags',
  'location',
  'selectedFile',
  'likeCount',
];

function hasOnlyValidProperties(req, res, next) {
  const { data = {} } = req.body;
  const invalidFields = Object.keys(data).filter((field) => !VALID_PROPERTIES.includes(field));
  if (invalidFields.length) {
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(', ')}`,
    });
  }
  next();
}

const hasRequiredProperties = hasProperties('title', 'creator');

async function postExists(req, res, next) {
  const post = await postsService.read(req.params.postId);
  if (post) {
    res.locals.post = post;
    return next();
  }
  next({ status: 404, message: `Post cannot be found.` });
}

async function list(req, res) {
  const data = await postsService.list();
  res.json({ data });
}

function read(req, res) {
  const { post: data } = res.locals;
  res.json({ data });
}

async function create(req, res) {
  const post = {
    ...req.body,
  };
  const data = await postsService.create(post);
  res.json({ data });
  console.log(post, data);
}

async function update(req, res) {
  const updatedPost = {
    ...req.body,
    post_id: req.params.postId,
  };
  const data = await postsService.update(updatedPost);
  console.log(updatedPost);
  res.json({ data });
}

async function destroy(req, res) {
  const { post } = res.locals;
  await postsService.delete(post.post_id);
  res.sendStatus(204);
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(postExists), read],
  create: [asyncErrorBoundary(create)],
  update: [asyncErrorBoundary(update), hasOnlyValidProperties, hasProperties],
  delete: [asyncErrorBoundary(postExists), asyncErrorBoundary(destroy)],
};
