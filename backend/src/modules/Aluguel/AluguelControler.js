const moment = require("moment");
const { PrismaCliente } = require("@prisma/client");
const prisma = new PrismaCliente();

async function create(req, res) {
  console.log("Criando um novo aluguel");
  console.log("Corpo da solicitação", req.body);
  const aluguel = await prisma.aluguel.create({
    data: req.body,
  });
  res.json(aluguel);
}

async function get() {
  console.log("Obtendo todos os aluguéis...");
  res.json(
    await prisma.aluguel.findMany({
      include: {
        Livro: true,
        Cliente: true,
      },
    })
  );
}

async function put(req, res) {
  console.log("Atualizando aluguel...");
  let { data, dataDevolucao } = req.body;
  let dias = moment(dataDevolucao).diff(data, "days");
  req.body.valorArrecadado =
    parseFloat(dias) * parseFloat(req.body.valorDiaria);

  delete req.body.valorDiaria;
  const aluguel = await prisma.aluguel.update({
    data: req.body,
    where: {
      id: req.body.id,
    },
  });
  return res.json(aluguel);
}

module.exports = { create, get, put };
