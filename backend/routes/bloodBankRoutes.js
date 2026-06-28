import express from "express";

import {
  createBloodBank,
  getAllBloodBanks,
  getBloodBankById,
  updateBloodBank,
  deleteBloodBank,
  searchBloodBanks,
} from "../controllers/bloodBankController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", protect, createBloodBank);

router.get("/all", getAllBloodBanks);

router.get("/search", searchBloodBanks);

router.get("/:id", getBloodBankById);

router.put("/:id", protect, updateBloodBank);

router.delete("/:id", protect, deleteBloodBank);

export default router;