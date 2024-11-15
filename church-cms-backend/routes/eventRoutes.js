const express = require("express");
const router = express.Router();
const EventController = require("../controllers/EventController");

router.post("/events", EventController.createEvent);
router.get("/events", EventController.getAllEvents);

module.exports = router;
