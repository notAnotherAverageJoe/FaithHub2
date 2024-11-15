const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/BlogController");

router.post("/blogpost", BlogController.createBlogPost);
router.get("/blogpost", BlogController.getAllBlogPosts);
router.patch("/blogpost/:id", BlogController.patchBlogPost);
router.delete("/blogpost/:id", BlogController.deleteBlogPost);

module.exports = router;
