const express = require("express");
const router = express.Router();

const imageRouter = require("./image");
const authRouter = require("./auth");
const chatRouter = require("./chat");

router.use("/image", imageRouter);
router.use("/auth", authRouter);
router.use("/chat", chatRouter);

module.exports = router;
