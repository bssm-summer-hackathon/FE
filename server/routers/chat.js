const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");

router.post("/chat", async (req, res) => {
  const question = req.body.text;
  const configuration = new Configuration({
    apiKey: "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",
  });
  try {
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });

    return res.json(response.data.choices[0].message);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
