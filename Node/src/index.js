const fs = require("fs");
const express = require("express");
const routes = require("./routes");
const Migration = require("./migrations");
const { dbFile } = require("./db");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

(async () => {
  if (!fs.existsSync(dbFile)) {
    await Migration.up();
  }
})();

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
