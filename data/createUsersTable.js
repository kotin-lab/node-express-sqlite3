const { db } = require('../db');

/** Create table */
const sql = `CREATE TABLE users (
  id INTEGER PRIMARY KEY, 
  first_name TEXT NOT NULL, 
  last_name TEXT, 
  username TEXT NOT NULL,
  email NOT NULL, 
  password TEXT
)`;

db.run(sql, err => {
  if (err) throw err;
  console.log('Users table created');
});