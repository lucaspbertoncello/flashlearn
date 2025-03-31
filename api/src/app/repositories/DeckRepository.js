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

  async findByName(name) {
    const [row] = await db.query(`SELECT * FROM decks WHERE name = $1`, [name]);
    return row;
  }

  async create(name) {
    const [row] = await db.query(
      "INSERT INTO decks(name) VALUES($1) RETURNING *",
      [name]
    );
    return row;
  }
}

module.exports = new DeckRepository();
