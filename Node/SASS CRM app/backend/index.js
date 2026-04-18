import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import userRouter from "./src/routes/user.routes.js";

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors())

// DB connect
connectDB();
app.get("/", (req, res) => {
    res.send("API is running...");
});
// Routes
app.use("/api", userRouter);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});