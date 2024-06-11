# Nodejs PostgreSQL REST API

A REST API using Node.js and PostgreSQL with pg library and using Express.js for routing.

## Requirements

- Node.js

- PostgreSQL

## Installation

1. Clone the repository: `git clone`

2. Install the dependencies: `npm install`

3. Create a database in PostgreSQL

4. Create a .env file in the root directory and add the following:

```
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=your_host
DB_PORT=your_port
DB_DATABASE=your_database
```

or just copy the .env.template file and fill it with your data.

5. Run the server: `npm run dev`

## Endpoints

- GET /api/posts
- GET /api/posts/:id
- POST /api/posts
- PUT /api/posts/:id
- DELETE /api/posts/:id

## Eslint

To run eslint: `npm run lint`
