const express = require("express");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sha1 = require("sha1");
const model = require("./../models/auth");
const signOptions = { expiresIn: "6h", algorithm: "RS256" };
const key = fs.readFileSync("./keys/private.pem");

const createToken = (payload) => jwt.sign(payload, key, signOptions);

const auth = async (req, res) => {
  try {
    const { usuario, password } = req.body;
    const user = await model.login(usuario, sha1(password));
    if (!user) res.status(401).json({ message: "No autorizado" });
    const { _id } = user;
    const token = createToken({ _id, usuario });
    res.json({ JWT: token });
  } catch (e) {
    console.log(e);
  }
};

router.post("/", auth);

module.exports = router;
