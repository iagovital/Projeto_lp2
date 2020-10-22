const { conn } = require('../db');


async function create(data) {
  const sql = `
  INSERT INTO
    temperaturas (Farenheit, Celsius, Kelvin)
  VALUES
    (?, ?, ?)
  `;

  const db = await conn();

  const { Farenheit, Celsius, Kelvin } = data;

  const { lastID } = await db.run(sql, [Farenheit, Celsius, Kelvin]);

  return lastID;
}

async function readAll() {
  const sql = `
    SELECT
      *
    FROM
      temperaturas
  `;

  const db = await conn();

  const temps = await db.all(sql);

  return temps;
}

module.exports = { create, readAll };