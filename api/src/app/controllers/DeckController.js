const DeckRepository = require("../repositories/DeckRepository");

class DeckController {
  async index(req, res) {
    const decks = await DeckRepository.findAll();
    res.json(decks);
  }

  async show(req, res) {
    const { id } = req.params;
    const deck = await DeckRepository.findById(id);
    res.json(deck);
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
