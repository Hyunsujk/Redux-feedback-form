const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  const queryString = `INSERT INTO "feedback"
      (feeling, understanding, support, comments)
      VALUES ($1,$2,$3,$4);`;

  pool
    .query(queryString, [
      req.body.feeling,
      req.body.understanding,
      req.body.support,
      req.body.comment,
    ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get("/", (req, res) => {
  const queryString = `SELECT * FROM "feedback" ORDER BY "id" ASC;`;
  pool
    .query(queryString)
    .then((responseDB) => {
      const dbRows = responseDB.rows;
      res.send(dbRows);
    })
    .catch((err) => {
      console.log("Error:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
