const res = require("express/lib/response");
const BlogPost = require("../models/BlogPosts");

class BlogPostController {
  static async createBlogPost(req, res) {
    try {
      const { title, content, author, published_date } = req.body;
      const newBlogPost = await BlogPost.create({
        title,
        content,
        author,
        published_date,
      });
      res.status(201).json(newBlogPost);
    } catch (error) {
      res.status(500).json({
        message: "Error creating a new blog, check blog creation controller",
      });
    }
  }
  static async getAllBlogPosts(req, res) {
    try {
      const blogs = await BlogPost.findAll();
      res.status(201).json(blogs);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to fetch all of the blog posts" });
    }
  }
  static async patchBlogPost(req, res) {
    const { id } = req.params;
    const { title, content, author, published_date } = req.body;
    try {
      const blogPost = await BlogPost.findByPk(id);
      if (!blogPost) {
        return res.status(404).json({ message: "Blog post not found!" });
      }
      if (title) blogPost.title = title;
      if (content) blogPost.content = content;
      if (author) blogPost.author = author;
      if (published_date) blogPost.published_date = published_date;

      await blogPost.save();
      res.status(200).json(blogPost);
    } catch (error) {
      res.status(500).json({ message: "Failed to patch the blog post" });
    }
  }
  static async deleteBlogPost(req, res) {
    const { id } = req.params;
    try {
      const blogPost = await BlogPost.findByPk(id);
      if (!blogPost) {
        return res.status(404).json({ message: "Failed to find the blogpost" });
      }
      await blogPost.destroy();

      res.status(200).json({ message: "Successfully deleted the blogpost" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete the blogpost" });
    }
  }
}

module.exports = BlogPostController;
