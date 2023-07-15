const express = require('express');
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');

const app = express();
app.set('port', process.env.PORT || 3001);

// solve CORS problem
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "*"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, PUT, POST, DELETE'
  );
  next();
});

// Todos router
app.use('/api/todos', bodyParser.json(), todosRouter);

// Users router
app.use('/api/users', usersRouter);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});