import express from "express";

import {
  createHospital,
  getAllHospitals,
  getHospitalById,
  updateHospital,
  deleteHospital,
  searchHospitals,
} from "../controllers/hospitalController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", protect, createHospital);

router.get("/all", getAllHospitals);

router.get("/search", searchHospitals);

router.get("/:id", getHospitalById);

router.put("/:id", protect, updateHospital);

router.delete("/:id", protect, deleteHospital);

export default router;