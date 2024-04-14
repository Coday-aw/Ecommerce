import express from "express";
import dbConnect from "./DB.js";
import productsRouter from "./routes/ProductsRoutes.js";
import ordersRouter from "./routes/ordersRouter.js";
import userRouter from "./routes/UserRouter.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cors from "cors";
import massageRouter from "./routes/massageRouter.js";

dbConnect();
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server running on port: " + PORT));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/massages", massageRouter);
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
