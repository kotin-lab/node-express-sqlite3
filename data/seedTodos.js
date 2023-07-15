const { db } = require('../db');

let todos = [
  'NestJS',
  'GraphQL',
  'Apollo',
  'TypeScript',
  'React',
  'Redux',
  'React Query',
  'Angular',
  'Vue',
  'D3',
  'Svelte',
  'SolidJS',
  'NextJS',
  'AWS',
].map((text) => ({
  text: `Learn ${text}`,
  active: true,
  done: false,
}));

todos.forEach(todo => {  
  const {text, active, done} = todo;
  /** Insert into */
  const sql = `INSERT INTO 
    todos (text, active, done)
    VALUES ($text, $active, $done)
  `;

  db.run(sql, {
    $text: text,
    $active: active,
    $done: done
  }, err => {
    if (err) throw err;
  });
});

console.log('Inserted into todos table successfully');

db.close(err => {
  if (err) throw err;

  console.log('DB closed');
});