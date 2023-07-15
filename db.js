const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data/db.sqlite', err => {
  if (err) throw err;
  console.log('DB connected');
});

module.exports = {
  db
};