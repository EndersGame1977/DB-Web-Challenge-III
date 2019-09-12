const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findStepsByScheme,
  addScheme,
  addStep
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
    .where("schemes.id", id)
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .orderBy("steps.step_number");
}

function addScheme(schemeData) {
  return db("schemes").insert(schemeData);
}

function addStep(id, stepData) {
  stepData.scheme_id = id;
  console.log(stepData);
  return db("steps").insert(stepData);
}
