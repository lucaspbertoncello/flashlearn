const CardRepository = require("../repositories/CardRepository");

class CardController {
  async index(req, res) {
    const cards = await CardRepository.findAll();
    res.json(cards);
  }

  async show(req, res) {
    res.send("Listando um...");
  }

  async store(req, res) {
    res.send("Criando um...");
  }

  async update(req, res) {
    res.send("Atualizando um...");
  }

  async delete(req, res) {
    res.send("Deletando um...");
  }
}

module.exports = new CardController();
