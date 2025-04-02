const CardRepository = require("../repositories/CardRepository");

class CardController {
  async index(req, res) {
    const cards = await CardRepository.findAll();
    res.json(cards);
  }

  async show(req, res) {
    const { id } = req.params;
    const card = await CardRepository.findById(id);

    if (!card) {
      return res.status(404).json({ error: "Flashcard not found" });
    }

    res.json(card);
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
