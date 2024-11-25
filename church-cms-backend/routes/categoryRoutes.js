const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.post("/category", CategoryController.createCategory);
router.get("/category", CategoryController.getAllCategories);

module.exports = router;
