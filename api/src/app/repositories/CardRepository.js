const db = require("../../database/index");

class CardRepository {
  async findAll() {
    const rows = db.query(
      `
        SELECT flashcards.*, decks.name as deck_name
        FROM flashcards
        JOIN decks ON decks.id = flashcards.deck_id
      `
    );
    return rows;
  }
}

module.exports = new CardRepository();
