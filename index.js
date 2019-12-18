require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const ctrl = require("./products_controller");

app.use(express.json());

app.get("/api/products", ctrl.getAll);
app.get("/api/products/:id", ctrl.getOne);
app.put("/api/products/:id", ctrl.update);
app.post("/api/products", ctrl.create);
app.delete("/api/products/:id", ctrl.delete);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT, () =>
    console.log(`listening on server port ${SERVER_PORT}`)
  );
});
