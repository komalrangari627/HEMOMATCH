import express from "express";

import {
  createDonor,
  getAllDonors,
  getDonorById,
  updateDonor,
  deleteDonor,
  searchDonors,
  toggleAvailability,
  myDonorProfile,
} from "../controllers/donorController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post(
  "/create",
  protect,
  createDonor
);

router.get(
  "/all",
  getAllDonors
);

router.get(
  "/search",
  searchDonors
);

router.get(
  "/my-profile",
  protect,
  myDonorProfile
);

router.get(
  "/:id",
  getDonorById
);

router.put(
  "/:id",
  protect,
  updateDonor
);

router.put(
  "/availability/:id",
  protect,
  toggleAvailability
);

router.delete(
  "/:id",
  protect,
  deleteDonor
);

export default router;