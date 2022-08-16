import express from "express";

const app = express();
const PORT = 3024;

app.get("/", (req, res) => {
  res.send("session/cookie basic test");
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
