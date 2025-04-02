const db = require("../../database/index");

class CardRepository {
  async findAll() {
    const rows = db.query(
      `
        SELECT flashcards.*, decks.name as deck_name
        FROM flashcards
        LEFT JOIN decks ON decks.id = flashcards.deck_id
      `
    );
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT flashcards.*, decks.name as deck_name
      FROM flashcards
      LEFT JOIN decks ON decks.id = flashcards.deck_id
      WHERE flashcards.id = $1
      `,
      [id]
    );
    return row;
  }
}

module.exports = new CardRepository();
