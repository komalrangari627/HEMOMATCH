import { donorModel } from "../Schema/Donor.js";
import { hospitalModel } from "../Schema/Hospital.js";
import { bloodBankModel } from "../Schema/BloodBank.js";
import { campModel } from "../Schema/Camp.js";
import { userModel } from "../Schema/User.js";


// ==============================
// DASHBOARD STATS
// ==============================

export const dashboardStats = async (
  req,
  res
) => {
  try {
    const totalUsers =
      await userModel.countDocuments();

    const totalDonors =
      await donorModel.countDocuments();

    const approvedDonors =
      await donorModel.countDocuments({
        approved: true,
      });

    const pendingDonors =
      await donorModel.countDocuments({
        approved: false,
      });

    const hospitals =
      await hospitalModel.countDocuments();

    const bloodBanks =
      await bloodBankModel.countDocuments();

    const camps =
      await campModel.countDocuments();

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalDonors,
        approvedDonors,
        pendingDonors,
        hospitals,
        bloodBanks,
        camps,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==============================
// GET ALL DONORS
// ==============================

export const getAllDonorsAdmin =
  async (req, res) => {
    try {
      const donors =
        await donorModel
          .find()
          .sort({ createdAt: -1 });

      res.status(200).json({
        success: true,
        donors,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// ==============================
// GET PENDING DONORS
// ==============================

export const getPendingDonors =
  async (req, res) => {
    try {
      const donors =
        await donorModel.find({
          approved: false,
        });

      res.status(200).json({
        success: true,
        donors,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// ==============================
// APPROVE DONOR
// ==============================

export const approveDonor =
  async (req, res) => {
    try {
      const donor =
        await donorModel.findById(
          req.params.id
        );

      if (!donor) {
        return res.status(404).json({
          success: false,
          message:
            "Donor not found",
        });
      }

      donor.approved = true;

      await donor.save();

      res.status(200).json({
        success: true,
        message:
          "Donor Approved Successfully",
        donor,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// ==============================
// REJECT DONOR
// ==============================

export const rejectDonor =
  async (req, res) => {
    try {
      const donor =
        await donorModel.findById(
          req.params.id
        );

      if (!donor) {
        return res.status(404).json({
          success: false,
          message:
            "Donor not found",
        });
      }

      donor.approved = false;

      await donor.save();

      res.status(200).json({
        success: true,
        message:
          "Donor Rejected",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// ==============================
// DELETE DONOR
// ==============================

export const deleteDonorAdmin =
  async (req, res) => {
    try {
      await donorModel.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Donor Deleted",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// ==============================
// ALL USERS
// ==============================

export const getAllUsers =
  async (req, res) => {
    try {
      const users =
        await userModel
          .find()
          .select("-password");

      res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// ==============================
// DELETE USER
// ==============================

export const deleteUser =
  async (req, res) => {
    try {
      await userModel.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "User Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };