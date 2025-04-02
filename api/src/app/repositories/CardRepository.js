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

  async create({ question, answer, deck_id }) {
    const [row] = await db.query(
      `
      INSERT INTO flashcards(question, answer, deck_id)
      VALUES($1, $2, $3)
      RETURNING *
      `,
      [question, answer, deck_id]
    );
    return row;
  }

  async update({ question, answer, deck_id }, id) {
    const [row] = await db.query(
      `
        UPDATE flashcards
        SET question = $1, answer = $2, deck_id = $3
        WHERE id = $4
        RETURNING *
      `,
      [question, answer, deck_id, id]
    );
    return row;
  }
}

module.exports = new CardRepository();
