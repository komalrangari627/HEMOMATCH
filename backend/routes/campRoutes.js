import express from "express";

import {
  createCamp,
  getAllCamps,
  getCampById,
  updateCamp,
  deleteCamp,
} from "../controllers/campController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", protect, createCamp);

router.get("/all", getAllCamps);

router.get("/:id", getCampById);

router.put("/:id", protect, updateCamp);

router.delete("/:id", protect, deleteCamp);

export default router;