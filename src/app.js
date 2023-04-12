const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const postsRouter = require('./posts/posts.router');

const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ extended: true }));

app.use('/posts', postsRouter);

app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

app.use((error, req, res, next) => {
  console.log(error);
  const { status = 500, message = 'Something went wrong!' } = error;
  res.status(status).json({ error: message });
});

app.use(morgan('dev'));

module.exports = app;
