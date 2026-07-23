import { Worker, Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL || "redis://localhost:6379", {
  maxRetriesPerRequest: null,
});

// ─── Queues ──────────────────────────────────────────────────────
export const documentQueue = new Queue("document-processing", { connection });

// ─── Workers ─────────────────────────────────────────────────────
const documentWorker = new Worker(
  "document-processing",
  async (job) => {
    console.log(`📄 Processing document job ${job.id}:`, job.data);

    switch (job.name) {
      case "parse-document":
        // TODO: Implement PDF parsing with pdf-parse
        console.log("Parsing document...");
        break;
      case "generate-embeddings":
        // TODO: Implement embedding generation with @google/generative-ai
        console.log("Generating embeddings...");
        break;
      default:
        console.warn(`Unknown job name: ${job.name}`);
    }
  },
  { connection, concurrency: 5 },
);

documentWorker.on("completed", (job) => {
  console.log(`✅ Job ${job.id} completed`);
});

documentWorker.on("failed", (job, err) => {
  console.error(`❌ Job ${job?.id} failed:`, err.message);
});

console.log("🔧 Synexes Worker started — listening for jobs...");
