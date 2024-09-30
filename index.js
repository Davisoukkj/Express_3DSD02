const express = require("express");
const app = express();

const PORT = 3343;

app.get("/", function (req, res) {
  res.send("HOJE TEM FUUUUUUUTEEEEEBAAAAS");
});

app.listen(PORT, () => {
  console.log("running..." + PORT);
});
