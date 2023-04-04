/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("events", (table) => {
    table.boolean("event_recurring").defaultTo(false);
    table.boolean("approved").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("events", (table) => {
    table.dropColumn("event_recurring");
    table.dropColumn("approved");
  });
};
