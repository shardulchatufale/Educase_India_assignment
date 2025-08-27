import express from "express";
import mongoose from "mongoose";

import schoolRoutes from "./Route/route.js";  // ⬅️ import routes



const app = express();
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Default route
app.get("/", (req, res) => {
  res.json({ status: "ok", service: "school-apis" });
});

// ✅ API routes
app.use("/", schoolRoutes);

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
