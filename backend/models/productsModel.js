import mongose from "mongoose";

const productsSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    images: [],
  },
  { timestamps: true }
);

const Products = mongose.model("Product", productsSchema);
export default Products;
