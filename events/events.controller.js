const eventsService = require("./events.service");

const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperty = require("../errors/hasProperty");
const [isValidStartDate, isValidEndDate] = require("../errors/isValidDate");

async function listAll(req, res, next) {
  let allEvents = await eventsService.listAll();

  res.json({ data: allEvents });
}

async function listOnDate(req, res, next) {
  const { date } = req.params;

  let eventsOnDate = await eventsService.listEventsOnDate(date);

  res.json({ data: eventsOnDate });
}

async function create(req, res) {
  const { data } = req.body;
  const createdEvent = await eventsService.create(data);
  res.status(201).json({
    data: createdEvent,
  });
}

module.exports = {
  listAll: asyncErrorBoundary(listAll),
  listOnDate: asyncErrorBoundary(listOnDate),
  create: [
    hasProperty("event_name"),
    hasProperty("event_start_date"),
    isValidStartDate,
    hasProperty("event_end_date"),
    isValidEndDate,
    hasProperty("event_organizer"),
    hasProperty("event_organizer_contact"),
    hasProperty("event_description"),
    asyncErrorBoundary(create),
  ],
};
