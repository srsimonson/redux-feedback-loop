const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// router.post('/',  (req, res) => {
//   let newBook = req.body;
//   console.log(`Adding book`, newBook);

//   let queryText = `INSERT INTO "books" ("author", "title")
//                    VALUES ($1, $2);`;
//   pool.query(queryText, [newBook.author, newBook.title])
//     .then(result => {
//       res.sendStatus(201);
//     })
//     .catch(error => {
//       console.log(`Error adding new book`, error);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
