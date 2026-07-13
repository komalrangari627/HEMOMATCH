import express from "express";

import {
  createRequest,
  getAllRequests,
  getRequestById,
  getMyRequests,
  updateRequestStatus,
  updateRequest,
  deleteRequest,
  getEmergencyRequests,
  requestStats,
} from "../controllers/requestController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* =====================================
   CREATE
===================================== */

router.post("/", protect, createRequest);

/* =====================================
   GET
===================================== */

router.get("/", protect, getAllRequests);

router.get("/my", protect, getMyRequests);

router.get("/emergency", protect, getEmergencyRequests);

router.get("/stats", protect, requestStats);

router.get("/:id", protect, getRequestById);

/* =====================================
   UPDATE
===================================== */

router.put("/:id", protect, updateRequest);

router.put("/:id/status", protect, updateRequestStatus);

/* =====================================
   DELETE
===================================== */

router.delete("/:id", protect, deleteRequest);

export default router;