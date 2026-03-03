const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  date: String,
  mealType: String,
  menuItem: String,
  rating: Number,
  comment: String
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
