const { db } = require('../db');

fetch('https://random-data-api.com/api/users/random_user')
  .then(res => res.json())
  .then(data => {
    const {first_name, last_name, username, email, password} = data;
    /** Insert into */
    const sql = `INSERT INTO 
      users (
        first_name,
        last_name,
        username,
        email,
        password
      )
      VALUES (
        $first_name,
        $last_name,
        $username,
        $email,
        $password
      )
    `;
    db.run(sql, {
      $first_name: first_name,
      $last_name: last_name,
      $username: username,
      $email: email,
      $password: password
    }, err => {
      if (err) throw err;

      console.log('Inserted into users table successfully');
    });

    db.close(err => {
      if (err) throw err;

      console.log('DB closed');
    });
  })
  .catch(err => {throw err;});
