import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import experts from "./data/experts.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// API ROUTE
app.get("/api/experts", (req, res) => {
  res.json(experts);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
