function hasProperty(property) {
  return function (req, res, next) {
    const { data = {} } = req.body;
    if (data[property] && data[property] !== "") next();
    else next({ status: 400, message: `Event must include a(n) ${property}` });
  };
}

module.exports = hasProperty;
