const { conn } = require('../db');

async function up() {
  const sql = `
    CREATE TABLE IF NOT EXISTS temperaturas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      Farenheit TEXT,
      Celsius TEXT,
      Kelvin TEXT
    )
  `;

  const db = await conn();

  await db.run(sql);
}

async function down() {
  const sql = `DROP TABLE temperaturas`;

  const db = await conn();

  await db.run(sql);
}

module.exports = { up, down };