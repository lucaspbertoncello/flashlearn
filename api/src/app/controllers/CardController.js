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
    const { question, answer, deck_id } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: "Question and Answer is required" });
    }

    const card = await CardRepository.create({ question, answer, deck_id });
    res.json(card);
  }

  async update(req, res) {
    const { id } = req.params;
    const { question, answer, deck_id } = req.body;

    const deckExists = await CardRepository.findById(id);

    if (!deckExists) {
      return res.status(404).json({ error: "Flashcard not found" });
    }

    if (!question || !answer) {
      return res.status(400).json({ error: "Fill all fields" });
    }

    const updatedCard = await CardRepository.update(
      { question, answer, deck_id },
      id
    );

    res.json(updatedCard);
  }

  async delete(req, res) {
    const { id } = req.params;

    const cardExists = await CardRepository.findById(id);

    if (!cardExists) {
      return res.status(404).json({ error: "Flashcard not found" });
    }

    await CardRepository.deleteById(id);
    res.sendStatus(204);
  }
}

module.exports = new CardController();
