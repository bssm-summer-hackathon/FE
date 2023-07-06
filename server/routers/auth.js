const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");

router.get("/login", async (req, res) => {
  const [result] = await getConnection().execute(
    `select * from user where user_id = ?`,
    [req.body.user_id]
  );

  if (result.length === 0) res.json("no user");
  else if (result[0].pw === req.body.pw) res.json("success");
  else return res.json("wrong password");
});

router.post("/signup", async (req, res) => {
  const [result] = await getConnection().execute(
    `select * from user where user_id = ?`,
    [req.body.user_id]
  );

  if (result.length !== 0) res.json("already user");

  await getConnection().execute(`insert into user(user_id, pw) values(?, ?)`, [
    req.body.user_id,
    req.body.pw,
  ]);
  res.json("success");
});

module.exports = router;
