const Category = require("../models/categories");

class CategoryController {
  static async createCategory(req, res) {
    const { name } = req.body;
    const newCategory = await Category.create({
      name,
    });
    res.status(201).json(newCategory);
  }
  catch(error) {
    res.status(500).json({
      message: "Failed to create a new category! Category controller issue!",
    });
  }
  static async getAllCategories(req, res) {
    const categories = await Category.findAll();
    res.status(201).json(categories);
  }
  catch(error) {
    res.status(500).json({
      message:
        "Error finding all categories, This issue is from CategoryController.",
    });
  }
}

module.exports = CategoryController;
