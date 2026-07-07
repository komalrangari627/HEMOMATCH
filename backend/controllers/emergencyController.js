import EmergencyRequest from "../models/EmergencyRequest.js";
import Donor from "../models/Donor.js";

export const createEmergencyRequest = async (req, res) => {

    // Save emergency request...

    req.io.emit("emergency-request", {
        bloodGroup: req.body.bloodGroup,
        hospital: req.body.hospital,
        city: req.body.city,
        message: "Emergency Blood Required"
    });

    res.status(201).json({
        success: true
    });
};

export const createEmergencyRequest = async (req, res) => {
  try {
    const {
      patientName,
      bloodGroup,
      units,
      hospital,
      city,
      contact,
    } = req.body;

    const emergency = await EmergencyRequest.create({
      patientName,
      bloodGroup,
      units,
      hospital,
      city,
      contact,
      requester: req.user?._id,
    });

    const donors = await Donor.find({
      bloodGroup,
      city,
      available: true,
    });

    if (req.io) {
      req.io.emit("emergency-request", {
        request: emergency,
        donorsFound: donors.length,
      });
    }

    res.status(201).json({
      success: true,
      message: "Emergency request created successfully.",
      request: emergency,
      donorsFound: donors.length,
      donors,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};