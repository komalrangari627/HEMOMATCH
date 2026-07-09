import Donor from "../Schema/Donor.js";
import  hospital from "../Schema/Hospital.js";
import  bloodBank from "../Schema/BloodBank.js";
import  camp from "../Schema/Camp.js";
import user from "../Schema/User.js";


// ==============================
// DASHBOARD STATS
// ==============================

export const dashboardStats = async (
  req,
  res
) => {
  try {
    const totalUsers =
      await user.countDocuments();

    const totalDonors =
      await Donor.countDocuments();

    const approvedDonors =
      await Donor.countDocuments({
        approved: true,
      });

    const pendingDonors =
      await Donor.countDocuments({
        approved: false,
      });

    const hospitals =
      await hospital.countDocuments();

    const bloodBanks =
      await bloodBank.countDocuments();

    const camps =
      await camp.countDocuments();

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
        await Donor
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
        await Donor.find({
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
        await Donor.findById(
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
        await Donor.findById(
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
      await Donor.findByIdAndDelete(
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
        await user
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
      await user.findByIdAndDelete(
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