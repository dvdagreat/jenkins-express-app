const express = require("express");
const serverless = require("serverless-http");

const app = express();
const port = 5000;

app.get("/test", (req, res, next) => {
  return res.send("works");
});

app.get("/", (req, res, next) => {
  return res.send("welcom to my api gateway");
});

app.get("/:id", (req, res, next) => {
  return res.json({ id: req.params.id });
});

if (process.env.ENVIRONMENT === "lambda") {
  module.exports.handler = serverless(app);
} else {
  app.listen(port, () => console.log(`app started at port ${port}`));
}
