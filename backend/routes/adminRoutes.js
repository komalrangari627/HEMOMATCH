import express from "express";

import {
  dashboardStats,
  getAllDonorsAdmin,
  getPendingDonors,
  approveDonor,
  rejectDonor,
  deleteDonorAdmin,
  getAllUsers,
  deleteUser,
} from "../controllers/adminController.js";

import { protect } from "../middleware/auth.js";
import { isAdmin } from "../middleware/admin.js";

const router = express.Router();

router.use(protect, isAdmin);

router.get(
  "/dashboard",
  dashboardStats
);

router.get(
  "/donors",
  getAllDonorsAdmin
);

router.get(
  "/pending-donors",
  getPendingDonors
);

router.put(
  "/approve-donor/:id",
  approveDonor
);

router.put(
  "/reject-donor/:id",
  rejectDonor
);

router.delete(
  "/delete-donor/:id",
  deleteDonorAdmin
);

router.get(
  "/users",
  getAllUsers
);

router.delete(
  "/delete-user/:id",
  deleteUser
);

export default router;