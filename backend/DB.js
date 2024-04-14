import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI;

const dbConnect = async () => {
  try {
    const db = await mongoose.connect(mongoUri);
    console.log("DB connected successfully!");
  } catch (err) {
    console.log(err.message);
    process.exit(0);
  }
};

dbConnect();

export default dbConnect;
