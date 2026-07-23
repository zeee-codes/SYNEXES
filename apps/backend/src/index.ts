import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app: Express = express();
const port = process.env.PORT || 4000;

// ─── Middleware ───────────────────────────────────────────────────
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ─── Health Check ────────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── API Routes ──────────────────────────────────────────────────
app.get("/api/v1", (_req, res) => {
  res.json({ message: "Synexes API v1" });
});

// ─── Start Server ────────────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Synexes API running on http://localhost:${port}`);
});

export default app;
