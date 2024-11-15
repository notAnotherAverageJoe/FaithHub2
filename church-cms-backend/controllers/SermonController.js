const Sermon = require("../models/Sermon");

class SermonController {
  static async createSermon(req, res) {
    try {
      const { title, preacher, description, media_url, date } = req.body;
      const newSermon = await Sermon.create({
        title,
        preacher,
        description,
        media_url,
        date,
      });
      res.status(201).json(newSermon);
    } catch (error) {
      res.status(500).json({ message: "Error creating sermon" });
    }
  }
  static async findAllSermons(req, res) {
    try {
      const sermons = await Sermon.findAll();
      res.status(201).json(sermons);
    } catch (error) {
      res.status(500).json({ message: "Failed to collect all sermons" });
    }
  }
  // Update an existing sermon full on update
  static async updateSermon(req, res) {
    const { id } = req.params;
    const { title, preacher, description, media_url, date } = req.body;

    try {
      const sermon = await Sermon.findByPk(id);
      if (!sermon) {
        return res.status(404).json({ message: "Sermon not found" });
      }

      // Update sermon with new values
      sermon.title = title || sermon.title;
      sermon.preacher = preacher || sermon.preacher;
      sermon.description = description || sermon.description;
      sermon.media_url = media_url || sermon.media_url;
      sermon.date = date || sermon.date;
      await sermon.save(); // Save the updated sermon

      res.status(200).json(sermon);
    } catch (error) {
      res.status(500).json({ message: "Error updating sermon" });
    }
  }

  // just do a partial update on an existing sermon
  static async patchSermon(req, res) {
    const { id } = req.params;
    const { title, preacher, description, media_url, date } = req.body;

    try {
      const sermon = await Sermon.findByPk(id);
      if (!sermon) {
        return res.status(404).json({ message: "Sermon not found" });
      }

      // Only update provided fields
      if (title) sermon.title = title;
      if (preacher) sermon.preacher = preacher;
      if (description) sermon.description = description;
      if (media_url) sermon.media_url = media_url;
      if (date) sermon.date = date;

      await sermon.save(); // Save the partial update

      res.status(200).json(sermon);
    } catch (error) {
      res.status(500).json({ message: "Error updating sermon" });
    }
  }

  // Delete a sermon
  static async deleteSermon(req, res) {
    const { id } = req.params;

    try {
      const sermon = await Sermon.findByPk(id);
      if (!sermon) {
        return res.status(404).json({ message: "Sermon not found" });
      }

      await sermon.destroy(); // Delete the sermon

      res.status(200).json({ message: "Sermon deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting sermon" });
    }
  }
}

module.exports = SermonController;
