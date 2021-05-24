const Joi = require("joi");
const numbers = Joi.number().positive().required();

const schemas = {
  create: Joi.object().keys({
    golesAFavor: numbers,
    golesEnContra: numbers,
    fecha: Joi.date().required(),
    puntos: numbers,
    rival: Joi.string().required(),
  }),
};

module.exports = { schemas };
