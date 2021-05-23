const MongoClient = require("mongodb").MongoClient;

const pool = async () => {
  try {
    return (
      await MongoClient.connect(`${process.env.DB_HOST}:${process.env.DB_HOST}`)
    ).db("partidos");
  } catch (e) {
    console.error(e.stack);
    throw e;
  }
};

module.exports = { pool };
