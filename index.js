const express = require("express");
const app = express();

const PORT = 3343;
//CRIAÇÃO DE ROTAS
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
});
//CRIAÇÃO ROTA 404 (MIDDLEWARE)
app.use(function (req, res) {
  res.status(404).sendFile(__dirname + "/src/views/404.html");
});

app.listen(PORT, () => {
  console.log("running..." + PORT);
});
