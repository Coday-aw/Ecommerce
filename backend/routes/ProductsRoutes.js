import express from "express";
const router = express.Router();
import {
  createProducts,
  getProducts,
  getProductById,
} from "../controllers/ProductController.js";

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProducts);

export default router;
