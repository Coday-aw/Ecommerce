import Order from "../models/ordersModel.js";
import asyncHandler from "express-async-handler";

const createOrder = asyncHandler(async (req, res) => {
  const { products } = req.body;

  if (!products) {
    res.status(400);
    throw new Error("please add products");
  }

  const newOrder = await Order.create({
    user: req.userId,
    products,
  });

  res.status(201).json({
    message: "Order created successfully",
    order: newOrder,
  });
});

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.userId }).populate(
    "products.product"
  );
  res.status(200).json(orders);
});

export { createOrder, getOrders };
