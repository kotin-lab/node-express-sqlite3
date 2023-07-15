const { db } = require('../db');

/** Create table */
const sql = `CREATE TABLE todos (
  id INTEGER PRIMARY KEY, 
  text TEXT NOT NULL, 
  active BOOLEAN, 
  done BOOLEAN
)`;

db.run(sql, err => {
  if (err) throw err;
  console.log('Todos table created');
});