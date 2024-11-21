require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const eventRoutes = require("./routes/eventRoutes");
const sermonRoutes = require("./routes/sermonRoutes");
const blogPostRoutes = require("./routes/blogPostRoutes");
const prayerRequestRoutes = require("./routes/prayerRequestsRoutes");
const AdminUserRoutes = require("./routes/adminUserRoutes");
const app = express();

app.use(express.json());

// Use routes
app.use("/api", eventRoutes);
app.use("/api", sermonRoutes);
app.use("/api", blogPostRoutes);
app.use("/api", prayerRequestRoutes);
app.use("/api", AdminUserRoutes);

// Sync models
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("All models were synchronized successfully.");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing models:", error);
//   });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
