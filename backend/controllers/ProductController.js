import Product from "../models/productsModel.js";

const createProducts = async (req, res) => {
  try {
    const { name, price, description, category, images } = req.body;
    const newProduct = new Product({
      name,
      price,
      description,
      category,
      images,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { createProducts, getProducts, getProductById };
