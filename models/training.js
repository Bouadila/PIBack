const mongoose = require("mongoose");
const TrainingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
  },
  duration: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  scheduledDate: {
    type: Date,
  },
  nbrParticipent: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  nbrApplyInto: {
    type: Number,
  },
});
const Training = mongoose.model("training", TrainingSchema);
module.exports = Training;
