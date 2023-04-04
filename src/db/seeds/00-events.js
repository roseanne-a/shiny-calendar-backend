/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("events").del();
  await knex("events").insert([
    {
      event_name: "Arbor Week",
      event_month: "3",
      event_start_date: "2023/04/28",
      event_end_date: "2023/05/07",
      event_organizer: "BrofessorsLab",
      event_organizer_contact: "https://twitch.tv/brofessorslab",
      event_description: "Raising funds for the Rainforest Trust",
    },
    {
      event_name: "Egg Month",
      event_month: "3",
      event_start_date: "2023/04/01",
      event_end_date: "2023/04/30",
      event_organizer: "SpeedTwister96",
      event_organizer_contact: "https://twitch.tv/speedtwister96",
      event_description:
        "The main idea of this event is to take the focus to full odds egg hunts in the community.",
    },
  ]);
};

//add approved event_recurring
