import mongoose from "mongoose";

const donorSchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types
            .ObjectId,
        ref: "User",
      },

      name: {
        type: String,
        required: true,
      },

      bloodGroup: {
        type: String,
        required: true,
      },

      age: Number,

      gender: String,

      phone: String,

      email: String,

      state: String,

      district: String,

      city: String,

      latitude: Number,

      longitude: Number,

      lastDonationDate: Date,

      available: {
        type: Boolean,
        default: true,
      },

      approved: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

export const donorModel =
  mongoose.model(
    "Donor",
    donorSchema
  );