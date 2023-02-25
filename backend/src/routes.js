const { Router } = require("express");
const routes = Router();

const clienteController = require("./modules/Cliente/ClienteControler");
const livroController = require("./modules/Livro/LivroControler");
const aluguelController = require("./modules/Aluguel/AluguelControler");

routes.get("/", (req, res) => {
  return res.json("Server Up");
});

routes.get("/cliente", clienteController.get);
routes.post("/cliente", clienteController.create);

routes.get("/livro", livroController.get);
routes.post("/livro", livroController.create);
routes.post("/livro/:id", livroController.putIsAlterardo);

routes.get("/aluguel", aluguelController.get);
routes.post("/aluguel", aluguelController.create);
routes.put("/aluguel", aluguelController.put);

module.exports = { routes }; // versão javascript
