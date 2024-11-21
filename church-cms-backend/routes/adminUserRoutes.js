const express = require("express");
const router = express.Router();
const AdminUserController = require("../controllers/AdminController");

router.post("/admin", AdminUserController.createAdminUser);
router.get("/admin", AdminUserController.getAdminUsers);
module.exports = router;
