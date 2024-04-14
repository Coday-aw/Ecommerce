import express from "express";
const router = express.Router();
import { createMassage } from "../controllers/massageController.js";

router.post("/", createMassage);

export default router;
