const AdminUser = require("../models/adminUsers");
const bcrypt = require("bcrypt");

class AdminUserController {
  // POST /adminusers - Create a new admin user
  static async createAdminUser(req, res) {
    try {
      const { username, password } = req.body;

      // Validate input
      if (!username || !password) {
        return res
          .status(400)
          .json({ error: "Username and password are required." });
      }

      // Hash the password
      const saltRounds = 10;
      const password_hash = await bcrypt.hash(password, saltRounds);

      // Create the admin user
      const newAdminUser = await AdminUser.create({ username, password_hash });

      // Send response
      res.status(201).json({
        message: "Admin user created successfully.",
        data: newAdminUser,
      });
    } catch (error) {
      console.error("Error creating admin user:", error);
      res.status(500).json({ error: "Failed to create admin user." });
    }
  }
  static async getAdminUsers(req, res) {
    try {
      const { username } = req.query;
      const adminUsers = username
        ? await AdminUser.findAll({ where: { username } })
        : await AdminUser.findAll();

      res.status(200).json({ data: adminUsers });
    } catch (error) {
      console.log("Error retrieving admin users");
      res.status(500).json({ error: "Failed to retieve admins" });
    }
  }
}

module.exports = AdminUserController;
