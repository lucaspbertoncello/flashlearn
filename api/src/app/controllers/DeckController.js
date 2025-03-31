const DeckRepository = require("../repositories/DeckRepository");

class DeckController {
  async index(req, res) {
    const decks = await DeckRepository.findAll();
    res.json(decks);
  }

  async show(req, res) {
    const { id } = req.params;
    const deck = await DeckRepository.findById(id);

    if (!deck) {
      return res.status(404).json({ error: "Deck not found" });
    }

    res.json(deck);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const nameAlreadyExists = await DeckRepository.findByName(name);

    if (nameAlreadyExists) {
      return res.status(400).json({ error: "This name is already in use" });
    }

    const deck = await DeckRepository.create(name);
    res.json(deck);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const deckExists = await DeckRepository.findById(id);
    const nameExists = await DeckRepository.findByName(name);

    if (!deckExists) {
      return res.status(404).json({ error: "Deck not found" });
    }

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    if (nameExists && nameExists.id !== id) {
      return res.status(400).json({ error: "This name is already in use" });
    }

    const createdDeck = await DeckRepository.update(id, { name });
    res.json(createdDeck);
  }

  async delete(req, res) {
    res.send("Deletando um deck.");
  }
}

module.exports = new DeckController();
