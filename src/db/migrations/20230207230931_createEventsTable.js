/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("event_id").primary();
    table.string("event_name");
    table.integer("event_month");
    table.date("event_start_date");
    table.date("event_end_date");
    table.string("event_organizer");
    table.string("event_organizer_contact");
    table.text("event_description");
    table.timestamps(true, true); // Adds created_at and updated_at columns
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("events");
};
