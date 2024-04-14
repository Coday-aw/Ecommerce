import express from "express";
const router = express.Router();
import { createOrder, getOrders } from "../controllers/ordersController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

router.get("/", verifyToken, getOrders);
router.post("/", verifyToken, createOrder);

export default router;
