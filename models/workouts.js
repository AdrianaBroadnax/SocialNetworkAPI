const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "What type of workout"
  },
  value: {
    type: Number,
    required: "How much weight needed"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;