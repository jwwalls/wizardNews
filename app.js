const express = require("express");
const app = express();
const { list, find } = require("./postBank");

app.use(express.static("public"));

console.log(list());
app.get("/", (req, res) => {
  res.send(`<html>
  <head>
    <link rel="stylesheet" href="/style.css" />
    <title>Wizard News</title>
  </head>
  <body>
    <h1>Wizard News</h1>
  </body>
</html>`);
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
