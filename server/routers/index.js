const express = require("express");
const router = express.Router();

const imageRouter = require("./image");
const oauthRouter = require("./oauth");
const chatRouter = require("./chat");
const authRouter = require("./auth");

router.use("/image", imageRouter);
router.use("/oauth", oauthRouter);
router.use("/chat", chatRouter);
router.use("/auth", authRouter);

module.exports = router;
