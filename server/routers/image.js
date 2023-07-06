const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
const { getConnection } = require("../models/connector");

router.post("/create", async (req, res) => {
  const apiKey = "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";

  const configuration = new Configuration({
    apiKey: apiKey,
  });

  try {
    const openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
      prompt: "sketch " + req.body.diaryTitle + " with more details",
      n: 1,
      size: "460x460",
    });

    await getConnection().execute(
      `INSERT INTO diary(year, month, date, emotion1, emotion2, emotion3, diaryTitle, diaryContent, diaryImage) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        req.body.year,
        req.body.month,
        req.body.date,
        req.body.emotion1,
        req.body.emotion2,
        req.body.emotion3,
        req.body.diaryTitle,
        req.body.diaryContent,
        response.data.data[0].url,
      ]
    );

    return res.json(response.data.data[0].url);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
