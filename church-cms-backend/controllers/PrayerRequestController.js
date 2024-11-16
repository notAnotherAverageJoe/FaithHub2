const PrayerRequest = require("../models/PrayerRequests");

class PrayerRequestController {
  static async createNewPrayerReq(req, res) {
    try {
      const { name, email, message, is_approved } = req.body;
      const newPrayerRequest = await PrayerRequest.create({
        name,
        email,
        message,
        is_approved,
      });
      res.status(201).json(newPrayerRequest);
    } catch (error) {
      console.error("Error creating prayer request:", error); // Log the actual error
      res.status(500).json({ message: "Failed to create new prayer request" });
    }
  }
}

module.exports = PrayerRequestController;
