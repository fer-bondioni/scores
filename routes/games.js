const express = require("express");
const router = express.Router();
const { all, last, filter } = require("../controllers/games");

router.get("/all", all);
router.get("/last", last);
router.get("/filter", filter);
//HOST:PUERTO/games/filter?start=2021-05-12&end=2021-05-15

module.exports = router;
