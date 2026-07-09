import Hospital from "../Schema/Hospital.js";


// CREATE HOSPITAL
export const createHospital = async (
  req,
  res
) => {
  try {
    const hospital =
      await hospital.create({
        ...req.body,
        createdBy: req.user.id,
      });

    res.status(201).json({
      success: true,
      message:
        "Hospital Added Successfully",
      hospital,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};


// GET ALL HOSPITALS
export const getAllHospitals =
  async (req, res) => {
    try {
      const hospitals =
        await Hospital.find();

      res.status(200).json({
        success: true,
        total:
          hospitals.length,
        hospitals,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// GET SINGLE HOSPITAL
export const getHospitalById =
  async (req, res) => {
    try {
      const hospital =
        await hospital.findById(
          req.params.id
        );

      if (!hospital) {
        return res.status(404).json({
          success: false,
          message:
            "Hospital Not Found",
        });
      }

      res.status(200).json({
        success: true,
        hospital,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// UPDATE HOSPITAL
export const updateHospital =
  async (req, res) => {
    try {
      const hospital =
        await hospital.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.status(200).json({
        success: true,
        message:
          "Hospital Updated",
        hospital,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// DELETE HOSPITAL
export const deleteHospital =
  async (req, res) => {
    try {
      await Hospital.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Hospital Deleted",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// SEARCH HOSPITALS
export const searchHospitals =
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

      const hospitals =
        await hospital.find(
          filter
        );

      res.status(200).json({
        success: true,
        hospitals,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };