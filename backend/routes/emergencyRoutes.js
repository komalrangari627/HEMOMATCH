import express from "express";

import {
  createEmergencyRequest,
} from "../controllers/emergencyController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  createEmergencyRequest
);

export default router;