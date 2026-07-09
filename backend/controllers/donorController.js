import Donor from "../Schema/Donor.js";


// =========================
// CREATE DONOR PROFILE
// =========================

export const createDonor = async (req, res) => {
  try {
    const donor = await Donor.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Donor profile created",
      donor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// =========================
// GET ALL DONORS
// =========================

export const getAllDonors = async (
  req,
  res
) => {
  try {
    const donors =
      await Donor.find({
        approved: true,
      });

    res.status(200).json({
      success: true,
      total: donors.length,
      donors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// =========================
// GET SINGLE DONOR
// =========================

export const getDonorById = async (
  req,
  res
) => {
  try {
    const donor =
      await Donor.findById(
        req.params.id
      );

    if (!donor) {
      return res.status(404).json({
        success: false,
        message: "Donor not found",
      });
    }

    res.status(200).json({
      success: true,
      donor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// =========================
// UPDATE DONOR
// =========================

export const updateDonor = async (
  req,
  res
) => {
  try {
    const donor =
      await Donor.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      message: "Donor updated",
      donor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// =========================
// DELETE DONOR
// =========================

export const deleteDonor = async (
  req,
  res
) => {
  try {
    await Donor.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Donor deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// =========================
// SEARCH DONORS
// =========================

export const searchDonors = async (
  req,
  res
) => {
  try {
    const {
      bloodGroup,
      state,
      district,
      city,
    } = req.query;

    let filter = {
      approved: true,
    };

    if (bloodGroup)
      filter.bloodGroup =
        bloodGroup;

    if (state)
      filter.state = state;

    if (district)
      filter.district =
        district;

    if (city)
      filter.city = city;

    const donors =
      await Donor.find(filter);

    res.status(200).json({
      success: true,
      total: donors.length,
      donors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// =========================
// TOGGLE AVAILABILITY
// =========================

export const toggleAvailability =
  async (req, res) => {
    try {
      const donor =
        await Donor.findById(
          req.params.id
        );

      donor.available =
        !donor.available;

      await donor.save();

      res.status(200).json({
        success: true,
        available:
          donor.available,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };



// =========================
// MY PROFILE
// =========================

export const myDonorProfile =
  async (req, res) => {
    try {
      const donor =
        await Donor.findOne({
          userId: req.user.id,
        });

      res.status(200).json({
        success: true,
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