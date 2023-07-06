const express = require("express");
const router = express.Router();
const axios = require("axios");

const GOOGLE_CLIENT_ID =
  "542996444128-fpkinrii092uvjhh8d9h8tsquukdddrk.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GOOGLE_REDIRECT_URI = "http://localhost:6978/api/auth/login/redirect";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v2/userinfo";

router.get("/login", (req, res) => {
  let url = "https://accounts.google.com/o/oauth2/v2/auth";

  url += `?client_id=${GOOGLE_CLIENT_ID}`;

  url += `&redirect_uri=${GOOGLE_REDIRECT_URI}`;

  url += "&response_type=code";

  url += "&scope=email profile";

  res.redirect(url);
});

router.get("/login/redirect", async (req, res) => {
  const { code } = req.query;
  console.log(`code: ${code}`);

  const resp = await axios.post(GOOGLE_TOKEN_URL, {
    code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URI,
    grant_type: "authorization_code",
  });
  const resp2 = await axios.get(GOOGLE_USERINFO_URL, {
    headers: {
      Authorization: `Bearer ${resp.data.access_token}`,
    },
  });
  console.log(resp2);
  res.json(resp.data);
});

module.exports = router;
