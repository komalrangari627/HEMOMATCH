import mongoose from "mongoose";

const campSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    organizer: {
      type: String,
      required: true,
    },

    venue: {
      type: String,
      required: true,
    },

    city: String,
    district: String,
    state: String,

    description: String,

    date: {
      type: Date,
      required: true,
    },

    startTime: String,
    endTime: String,

    contactPerson: String,
    contactNumber: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Camp",
  campSchema
);