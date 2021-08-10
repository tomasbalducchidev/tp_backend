const express = require("express");
const router = express.Router({ mergeParams: true });
const routeController = require("../common/route.controller");
// const {required} = require('../middlewares/auth')
const SentController = require("../controllers/sent.controller");

router.get(
  "/",
  /*[required],*/ (req, res) => {
    routeController.handleRequest(req, res, SentController.getAll);
  }
);

router.post("/", (req, res) => {
  routeController.handleRequest(req, res, SentController.create);
});

router.patch("/:idsent", (req, res) => {
  routeController.handleRequest(req, res, SentController.actualizar);
});

module.exports = router;
