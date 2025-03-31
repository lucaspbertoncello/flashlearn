const db = require("../../database/index");

class DeckRepository {
  async findAll() {
    const rows = db.query("SELECT * FROM decks;");
    return rows;
  }
}

module.exports = new DeckRepository();
