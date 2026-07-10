import express from "express";

import {
    searchBlood
} from "../controllers/bloodController.js";


const router = express.Router();


router.get(
    "/search",
    searchBlood
);


export default router;