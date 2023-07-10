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
