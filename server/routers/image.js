const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");

router.post("/create", async (req, res) => {
  const apiKey = "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";

  const configuration = new Configuration({
    apiKey: apiKey,
  });

  try {
    const openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
      prompt: "sketch " + req.body.text + " with more details",
      n: 1,
      size: "1024x1024",
    });

    return res.json(response.data.data[0].url);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
