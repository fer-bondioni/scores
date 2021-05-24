const { pool } = require("../utils/bd");

//datos de entrada -> validar
const create = async ({ golesAFavor, golesEnContra, fecha, puntos, rival }) => {
  (await pool()).collection("equipos").insertOne({
    golesAFavor,
    golesEnContra,
    fecha: new Date(fecha),
    puntos,
    rival,
  });
};

//find({conditions}, {projections}), sort, limit
//db.collection.find({})
const find = async ({
  conditions = {},
  projection = {},
  sort = {},
  limit = 20,
}) => {
  try {
    return (await pool())
      .collection("equipos")
      .find(conditions, { projection })
      .sort(sort)
      .limit(limit)
      .toArray(); //convertimos obj en vectores
  } catch (error) {
    console.error(error);
  }
};
//localhost:3000/games/filter?start=2021-05-21
//|| new Date(start)
const findByDate = (start, end) =>
  find({
    conditions: {
      fecha: {
        $gte: new Date(start), //lo resuelve ISOString
        $lte: new Date(end),
      },
    },
  });

const all = () => find({});

//find({sort: {_id : -1}})
const last = () => find({ sort: { _id: -1 }, limit: 1 });

module.exports = { findByDate, all, last, create };
