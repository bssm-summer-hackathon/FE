const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");

router.post("/login", async (req, res) => {
  const [result] = await getConnection().execute(
    `select * from user where user_id = ?`,
    [req.body.loginInfo.id]
  );

  if (result.length === 0) res.json("no user");
  else if (result[0].pw === req.body.loginInfo.pw) res.json("success");
  else return res.json("wrong password");
});

router.post("/signup", async (req, res) => {
  const [result] = await getConnection().execute(
    `select * from user where user_id = ?`,
    [req.body.signUpInfo.id]
  );

  if (result.length !== 0) res.json("already user");

  await getConnection().execute(
    `insert into user(name, user_id, pw) values(?, ?, ?)`,
    [req.body.signUpInfo.name, req.body.signUpInfo.id, req.body.signUpInfo.pw]
  );
  res.json("success");
});

module.exports = router;
