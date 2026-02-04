import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Load data files
const dataDir = join(__dirname, "..", "data");
const students = JSON.parse(readFileSync(join(dataDir, "students.json"), "utf-8"));
const courses = JSON.parse(readFileSync(join(dataDir, "courses.json"), "utf-8"));
const payments = JSON.parse(readFileSync(join(dataDir, "payments.json"), "utf-8"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", students: students.length });
});

// TODO: Implement GET /api/students/:email
// This endpoint should return a unified profile combining data from all three sources

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Data loaded: ${students.length} students, ${courses.length} courses, ${payments.length} payments`);
});
