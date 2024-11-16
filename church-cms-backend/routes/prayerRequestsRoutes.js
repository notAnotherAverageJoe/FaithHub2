const express = require("express");
const router = express.Router();
const prayerRequestController = require("../controllers/PrayerRequestController");

router.post("/prayerRequests", prayerRequestController.createNewPrayerReq);

module.exports = router;
