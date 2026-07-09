import mongoose from "mongoose";

const certificateSchema =
  new mongoose.Schema(
    {
      donorId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Donor",
      },

      donorName: String,

      bloodGroup: String,

      donationDate: Date,

      certificateUrl: String,

      issuedBy: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Certificate",
  certificateSchema
);