import express from "express";

const app = express();
const PORT = 3024;

const users = [
  {
    username: "ja",
    firstName: "Jörg",
    lastName: "Ackermann",
    email: "ja@mail.com",
  },
  {
    username: "ac",
    firstName: "Angelika",
    lastName: "Carstense",
    email: "ac@mail.com",
  },
];

app.get("/", (req, res) => {
  res.send("session/cookie basic test");
});

app.get("/login/:username", (req, res) => {
  const user = users.find((user) => user.username === req.params.username);
  if (user) {
    res.send(`User identified: ${JSON.stringify(user)}`);
  } else {
    res.status(500).send("bad login");
  }
});

app.get("/current-user", (req, res) => {
  res.send("no user logged in");
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
