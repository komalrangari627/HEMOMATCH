import Request from "../models/Request.js";
import User from "../models/User.js";
import BloodBank from "../models/BloodBank.js";
import Hospital from "../models/Hospital.js";
import Donor from "../models/Donor.js";

/* ======================================================
   CREATE REQUEST
====================================================== */

export const createRequest = async (req, res) => {
  try {
    const {
      patientName,
      bloodGroup,
      units,
      hospital,
      city,
      state,
      requiredDate,
      emergency,
      message,
    } = req.body;

    if (
      !patientName ||
      !bloodGroup ||
      !units ||
      !hospital ||
      !city ||
      !state ||
      !requiredDate
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const request = await Request.create({
      patientName,
      bloodGroup,
      units,
      hospital,
      city,
      state,
      requiredDate,
      emergency,
      message,
      requester: req.user._id,
      status: "Pending",
    });

    if (req.io) {
      req.io.emit("newRequest", request);
    }

    res.status(201).json({
      success: true,
      message: "Blood request created successfully.",
      request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   GET ALL REQUESTS
====================================================== */

export const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find()
      .populate("requester", "name email role")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: requests.length,
      requests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   GET SINGLE REQUEST
====================================================== */

export const getRequestById = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id)
      .populate("requester", "name email phone role");

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found.",
      });
    }

    res.json({
      success: true,
      request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   MY REQUESTS
====================================================== */

export const getMyRequests = async (req, res) => {
  try {
    const requests = await Request.find({
      requester: req.user._id,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      requests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   UPDATE STATUS
====================================================== */

export const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found.",
      });
    }

    request.status = status;

    if (status === "Accepted") {
      request.acceptedBy = req.user._id;
    }

    await request.save();

    if (req.io) {
      req.io.emit("requestUpdated", request);
    }

    res.json({
      success: true,
      message: "Status updated successfully.",
      request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   UPDATE REQUEST
====================================================== */

export const updateRequest = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found.",
      });
    }

    Object.assign(request, req.body);

    await request.save();

    if (req.io) {
      req.io.emit("requestUpdated", request);
    }

    res.json({
      success: true,
      message: "Request updated successfully.",
      request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   DELETE REQUEST
====================================================== */

export const deleteRequest = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found.",
      });
    }

    await request.deleteOne();

    if (req.io) {
      req.io.emit("requestDeleted", req.params.id);
    }

    res.json({
      success: true,
      message: "Request deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   EMERGENCY REQUESTS
====================================================== */

export const getEmergencyRequests = async (req, res) => {
  try {
    const requests = await Request.find({
      emergency: true,
      status: "Pending",
    }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      requests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   DASHBOARD STATS
====================================================== */

export const requestStats = async (req, res) => {
  try {
    const total = await Request.countDocuments();

    const pending = await Request.countDocuments({
      status: "Pending",
    });

    const accepted = await Request.countDocuments({
      status: "Accepted",
    });

    const completed = await Request.countDocuments({
      status: "Completed",
    });

    const rejected = await Request.countDocuments({
      status: "Rejected",
    });

    const emergency = await Request.countDocuments({
      emergency: true,
    });

    res.json({
      success: true,
      stats: {
        total,
        pending,
        accepted,
        completed,
        rejected,
        emergency,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};