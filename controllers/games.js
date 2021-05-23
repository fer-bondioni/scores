const model = require("../models/games");

//para query strings se suele mandar minimos y maximos
//all?min=&max=

// last es la función encargada de devolver el ultimo partido

const all = (req, res) =>
  model
    .all()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json({ message: "Error", e }));

const last = (req, res) =>
  model
    .last()
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json({ message: "Error", e }));

const filter = async (req, res) => {
  try {
    const { start, end } = req.query;
    const partidos = await model.findByDate(start, end);
    res.json({ partidos });
  } catch (error) {
    res.status(500).json({ message: "Ocurrió un error", e });
  }
};

module.exports = { all, last, filter };
