const express = require("express");
const app = express();
const router = require("./routers");
const { connect } = require("./models/connector");

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // 모든 도메인에 대해 액세스 허용 (*)
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // 허용되는 HTTP 메서드 설정
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // 허용되는 헤더 설정
  next();
});

app.use("/api", router);

app.listen(3232);
