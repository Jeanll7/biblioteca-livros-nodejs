const { Router } = require("express");
const routes = Router();

const clientController = require("./modules/Cliente/ClienteControler");

routes.get("/", (req, res) => {
  return res.json("Server Up");
});

routes.get("/cliente", clientController.get);
routes.post("/cliente", clientController.create);

module.exports = { routes };
