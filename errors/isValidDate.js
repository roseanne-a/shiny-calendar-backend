//date is this year and over
//day and month are valid

function isValidStartDate(req, res, next) {
  const { data: { event_start_date } = {} } = req.body;

  const today = new Date();
  const currentYear = today.getFullYear();

  if (isNaN(new Date(event_start_date)))
    next({ status: 400, message: `${event_start_date} is not a valid date` });
  else if (new Date(event_start_date).getFullYear() < currentYear) {
    next({
      status: 400,
      message: `${new Date(
        event_start_date
      ).getFullYear()} is not a valid year, must be ${currentYear} and above`,
    });
  } else next();
}

function isValidEndDate(req, res, next) {
  const { data: { event_start_date, event_end_date } = {} } = req.body;
  const formattedStartDate = new Date(event_start_date);
  const formattedEndDate = new Date(event_end_date);

  if (isNaN(formattedEndDate))
    next({ status: 400, message: `${event_end_date} is not a valid date` });
  else if (formattedEndDate < formattedStartDate)
    next({
      status: 400,
      message: `The end date must occur on or after the start date.`,
    });
  else next();
}

module.exports = [isValidStartDate, isValidEndDate];
