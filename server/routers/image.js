const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
const { getConnection } = require("../models/connector");
const request = require("request");

router.post("/create", async (req, res) => {
  const apiKey = "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";

  const translateUrl = "https://openapi.naver.com/v1/papago/n2mt";

  const configuration = new Configuration({
    apiKey: apiKey,
  });

  try {
    const openai = new OpenAIApi(configuration);
    await request.post(
      {
        url: translateUrl,
        form: {
          source: "ko",
          target: "en",
          text: req.body.diaryInfo.diaryTitle,
        },
        headers: {
          "X-Naver-Client-Id": "otNxUqtVq3o8yc3DHX4f",
          "X-Naver-Client-Secret": "ujrFkgb6qh",
        },
      },
      async (error, response, body) => {
        body = JSON.parse(body);
        const responseImage = await openai.createImage({
          prompt:
            "sketch " +
            body.message.result.translatedText +
            " with more details",
          n: 1,
          size: "1024x1024",
        });

        await getConnection().execute(
          `INSERT INTO diary(year, month, date, emotion1, emotion2, emotion3, diaryTitle, diaryContent, diaryImageUrl) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            req.body.diaryInfo.year,
            req.body.diaryInfo.month,
            req.body.diaryInfo.date,
            req.body.diaryInfo.emotion1,
            req.body.diaryInfo.emotion2,
            req.body.diaryInfo.emotion3,
            req.body.diaryInfo.diaryTitle,
            req.body.diaryInfo.diaryContent,
            responseImage.data.data[0].url,
          ]
        );

        res.json(responseImage.data.data[0].url);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
