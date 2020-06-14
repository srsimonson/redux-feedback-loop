const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let sqlQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlQuery, [req.body[0], req.body[1], req.body[2], req.body[3]])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('ERROR with form.router POST:', error);
        res.sendStatus(500);
    })
})

module.exports = router;
