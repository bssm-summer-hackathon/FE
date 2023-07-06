const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");

router.get("/getdiary", async (req, res) => {
  const [result] = await getConnection().execute(
    `select * from user where user_id = ?`,
    [req.body.loginInfo.id]
  );

  if (result.length === 0) res.json("no user");
  else if (result[0].pw === req.body.loginInfo.pw)
    res.json([result[0].name, result[0].user_id, result[0].pw]);
  else return res.json("wrong password");
});

module.exports = router;
