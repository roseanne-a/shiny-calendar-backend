const router = require("express").Router();
const controller = require("./events.controller");
// const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.listAll);
router.route("/:date").get(controller.listOnDate);
router.route("/form").post(controller.create);

module.exports = router;
