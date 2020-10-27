const express = require("express");
const router = express.Router();
const TempController = require("../controllers/index");
router.post("/enviar", TempController.index);
router.get("/mostrar", TempController.readAll2);
module.exports = router;
