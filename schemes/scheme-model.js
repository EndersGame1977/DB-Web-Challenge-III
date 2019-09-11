const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findStepsByScheme,
  add
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findStepsByScheme(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .where("schemes.id", id);
}

function add(schemeData) {
  return db("schemes").insert(schemeData);
}
