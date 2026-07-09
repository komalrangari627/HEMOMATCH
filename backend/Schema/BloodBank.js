import mongoose from "mongoose";

const bloodBankSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      email: String,

      phone: String,

      address: String,

      city: String,

      district: String,

      state: String,

      inventory: {
        A_Positive: {
          type: Number,
          default: 0,
        },
        A_Negative: {
          type: Number,
          default: 0,
        },
        B_Positive: {
          type: Number,
          default: 0,
        },
        B_Negative: {
          type: Number,
          default: 0,
        },
        AB_Positive: {
          type: Number,
          default: 0,
        },
        AB_Negative: {
          type: Number,
          default: 0,
        },
        O_Positive: {
          type: Number,
          default: 0,
        },
        O_Negative: {
          type: Number,
          default: 0,
        },
      },

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
    "BloodBank",
    bloodBankSchema
  );