const db = require("../../database/index");

class DeckRepository {
  async findAll() {
    const rows = await db.query("SELECT * FROM decks");
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT * FROM decks WHERE id = $1
    `,
      [id]
    );
    return row;
  }
}

module.exports = new DeckRepository();
