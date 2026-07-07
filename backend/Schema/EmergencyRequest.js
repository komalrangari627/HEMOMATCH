import mongoose from "mongoose";

const emergencyRequestSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

    units: {
      type: Number,
      required: true,
    },

    hospital: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    contact: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Accepted", "Completed"],
      default: "Pending",
    },

    requester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "EmergencyRequest",
  emergencyRequestSchema
);