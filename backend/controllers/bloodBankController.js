import bloodBank from "../Schema/BloodBank.js";


// CREATE BLOOD BANK
export const createBloodBank =
  async (req, res) => {
    try {
      const bloodBank =
        await bloodBank.create({
          ...req.body,
          createdBy:
            req.user.id,
        });

      res.status(201).json({
        success: true,
        message:
          "Blood Bank Added",
        bloodBank,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// GET ALL BLOOD BANKS
export const getAllBloodBanks =
  async (req, res) => {
    try {
      const bloodBanks =
        await bloodBank.find();

      res.status(200).json({
        success: true,
        total:
          bloodBanks.length,
        bloodBanks,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// GET SINGLE BLOOD BANK
export const getBloodBankById =
  async (req, res) => {
    try {
      const bloodBank =
        await bloodBank.findById(
          req.params.id
        );

      if (!bloodBank) {
        return res.status(404).json({
          success: false,
          message:
            "Blood Bank Not Found",
        });
      }

      res.status(200).json({
        success: true,
        bloodBank,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// UPDATE BLOOD BANK
export const updateBloodBank =
  async (req, res) => {
    try {
      const bloodBank =
        await bloodBank.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.status(200).json({
        success: true,
        message:
          "Blood Bank Updated",
        bloodBank,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// DELETE BLOOD BANK
export const deleteBloodBank =
  async (req, res) => {
    try {
      await bloodBank.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Blood Bank Deleted",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// SEARCH BLOOD BANKS
export const searchBloodBanks =
  async (req, res) => {
    try {
      const {
        city,
        state,
      } = req.query;

      let filter = {};

      if (city)
        filter.city = city;

      if (state)
        filter.state = state;

      const bloodBanks =
        await bloodBank.find(
          filter
        );

      res.status(200).json({
        success: true,
        bloodBanks,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };