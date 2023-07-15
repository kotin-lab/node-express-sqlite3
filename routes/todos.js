const express = require('express');
const router = express.Router();
const { db } = require('../db');

// define the home page route
router.get('/', (req, res) => {  
  const sql = `SELECT * FROM todos LIMIT 50`;

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

router.post('/', (req, res) => {
  const { text } = req.body;

  const sql = `INSERT INTO 
    todos (text, active, done)
    VALUES ($text, $active, $done)
  `;
  db.run(sql, {
    $text: text,
    $active: true,
    $done: false
  }, function(err) {
    if (err) {
      console.log(err);
      return res.status(500).json({error: err.message});
    }

    res.json({
      id: this.lastID
    });
  });
});

router.put('/:todoId', (req, res) => {
  const { todoId } = req.params;
  const { done } = req.body;

  const sql = `UPDATE todos
    SET done = $done
    WHERE id = $todoId
  `;

  db.run(sql, {
    $done: done,
    $todoId: todoId
  }, err => {
    if (err) {
      console.log(err);
      return res.status(500).json({error: err.message});
    }

    res.end();
  });
});

router.delete('/:todoId', (req, res) => {
  const { todoId } = req.params;

  const sql = `DELETE FROM todos WHERE id = $todoId`;
  db.run(sql, {$todoId: todoId}, err => {
    if (err) {
      console.log(err);
      return res.status(500).json({error: err.message});
    }

    res.end();
  });
});

module.exports = router;