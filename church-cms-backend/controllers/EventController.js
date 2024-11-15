const Event = require("../models/Event");

class EventController {
  static async createEvent(req, res) {
    try {
      const { title, date, description } = req.body;
      const newEvent = await Event.create({ title, date, description });
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(500).json({ message: "Error creating event", error });
    }
  }

  static async getAllEvents(req, res) {
    try {
      const events = await Event.findAll();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving events", error });
    }
  }
}

module.exports = EventController;
