const express = require("express");
const router = express.Router({ mergeParams: true });
const routeController = require("../common/route.controller");
const { required } = require("../middlewares/auth");
const ReceivedController = require("../controllers/received.controller");

router.get("/", [required], (req, res) => {
  routeController.handleRequest(req, res, ReceivedController.getAll);
});

router.patch("/:idreceived", (req, res) => {
  routeController.handleRequest(req, res, ReceivedController.actualizar);
});

// router.post("/", (req, res) => {
//   routeController.handleRequest(req, res, SentController.create);
// });

// router.patch("/:id", (req, res) => {
//   routeController.handleRequest(req, res, SentController.actualizar);
// });

module.exports = router;
