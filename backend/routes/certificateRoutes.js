import express from "express";

import {
  generateCertificate,
  getCertificates,
} from "../controllers/certificateController.js";

import { protect } from "../middleware/auth.js";
import { isAdmin } from "../middleware/admin.js";

const router = express.Router();

router.post(
  "/generate/:id",
  protect,
  isAdmin,
  generateCertificate
);

router.get(
  "/all",
  protect,
  getCertificates
);

export default router;