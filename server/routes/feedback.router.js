const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log(req.body);
  //   const queryString = `INSERT INTO "feedback"
  //     (feeling, understanding, support, comments)
  //     VALUES ($1,$2,$3,$4);`;

  //     pool.query(queryString, [
  //         req.body.
  //     ])
});

module.exports = router;
