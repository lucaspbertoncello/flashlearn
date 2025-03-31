const DeckRepository = require("../repositories/DeckRepository");

class DeckController {
  async index(req, res) {
    const result = await DeckRepository.findAll();
    res.json(result);
  }

  show(req, res) {
    const { id } = req.params;
    res.send(`Listando contato com id ${id}`);
  }

  store(req, res) {
    res.send("Criando um deck.");
  }

  update(req, res) {
    res.send("Atualizando um deck.");
  }

  delete(req, res) {
    res.send("Deletando um deck.");
  }
}

module.exports = new DeckController();
