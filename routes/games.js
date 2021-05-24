const express = require("express");
const router = express.Router();
const { all, last, filter, create } = require("../controllers/games");
const middlewares = require("./../middlewares/games");

router.get("/filter", filter);
router.get("/last", last);
router.get("/all", all);
router.post("/create", middlewares.create, create);

//HOST:PUERTO/games/filter?start=2021-05-12&end=2021-05-15

module.exports = router;
