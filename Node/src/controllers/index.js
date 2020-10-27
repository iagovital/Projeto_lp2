const temp = require("../models/index");

const index = async (req, res) => {
  console.log(req.body);
  const temps = await temp.create(req.body);
  res.json(temps);
};

const readAll = async (req, res) => {
  const temps = await temp.readAll();

  res.json(temps);
};

module.exports = { index, readAll };
