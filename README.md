# Memoree Lane Server

---

API built using Node & Express. Querying data from a PostgreSQL database with KnexJS.

## Starting Server 💾

Clone app: `https://github.com/cheyroseflammer/memoreeLaneServer.git`

Install dependencies: `npm install`

Create database: `psql -U [username]` => `CREATE DATABASE memoreeLaneDb`

Run most recent migration file: `npx knex migrate:latest`

Seed database: `npx knex seed: run`

Tests: `npm test`

Start server: `npm start`

Start nodemon for development: `npm run dev`

## Testing 🧪

Testing done with Jest and Supertest

## API Endpoints Overview

GET `/posts`

```js
{
  post_id: Integer,
  title: String,
  message: String,
  creator: String,
  latitude: String,
  longitude: String,
  tags: Text Array,
  selectedFile: Text,
  likeCount: Integer,
  created_at: Time,
  updated_at: Time
}
```

POST `/posts`

```js
{
  title: String,
  message: String,
  creator: String,
  latitude: String,
  longitude: String,
  tags: Text Array,
  selectedFile: Text,
}
```

PUT `/posts/:post_id`

```js
{
  post_id: Integer,
  title: String,
  message: String,
  creator: String,
  latitude: String,
  longitude: String,
  tags: Text Array,
  selectedFile: Text,
  likeCount: Integer,
  created_at: Time,
  updated_at: Time
}
```

DELETE `/posts/post_id`

```js
{
  post_id: Integer,
  title: String,
  message: String,
  creator: String,
  latitude: String,
  longitude: String,
  tags: Text Array,
  selectedFile: Text,
  likeCount: Integer,
  created_at: Time,
  updated_at: Time
}
```
