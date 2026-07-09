import mongoose from "mongoose";

const hospitalSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
      },

      phone: {
        type: String,
      },

      address: {
        type: String,
      },

      city: {
        type: String,
      },

      district: {
        type: String,
      },

      state: {
        type: String,
      },

      latitude: Number,

      longitude: Number,

      createdBy: {
        type:
          mongoose.Schema.Types
            .ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: true,
    }
  );

export default
  mongoose.model(
    "Hospital",
    hospitalSchema
  );