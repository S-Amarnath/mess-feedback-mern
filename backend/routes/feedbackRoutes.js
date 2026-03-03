const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.post("/", async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.json({ message: "Feedback Submitted" });
});

router.get("/", async (req, res) => {
  const data = await Feedback.find();
  res.json(data);
});

module.exports = router;
