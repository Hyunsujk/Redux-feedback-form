const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// add new feedback to the database
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

// get a list from the database and send it to frontend
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

// delete the data of the ide
router.delete("/:id", (req, res) => {
  let reqId = req.params.id;
  const queryString = `DELETE FROM "feedback" WHERE id=$1;`;
  pool
    .query(queryString, [reqId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error deleting query");
      res.sendStatus(500);
    });
});

module.exports = router;
