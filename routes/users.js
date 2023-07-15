const express = require('express');
const { db } = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  const sql = `SELECT * FROM users LIMIT 50`;

  db.all(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: err.message
      });
    } 

    res.json(rows);
  });
});

module.exports = router;