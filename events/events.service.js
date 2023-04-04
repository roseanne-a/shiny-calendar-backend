const knex = require("../src/db/connection");

function listAll() {
  return knex("events").select("*");
}

function listEventsOnDate(date) {
  let newDate = new Date(date).toJSON();
  return knex("events")
    .select("*")
    .where("event_start_date", "<=", newDate)
    .andWhere("event_end_date", ">=", newDate);
}

function create(newEvent) {
  return knex("events")
    .insert(newEvent)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  listAll,
  listEventsOnDate,
  create,
};
