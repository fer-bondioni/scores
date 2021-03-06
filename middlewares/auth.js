const fs = require("fs");
const jwt = require("jsonwebtoken");
const key = fs.readFileSync("./keys/public.pem");

const secured = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id } = jwt.verify(authorization, key);
    req.id = _id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "No autorizado" });
  }
};

module.exports = { secured };
