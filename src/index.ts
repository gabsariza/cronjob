import express, { Request, Response } from "express";
import { CronService as CronJob } from "./services/cron.service";

const app = express();
const port = 3000;

let isRunning = false;

// Example cron job with error handling
const task = async () => {
  try {
    console.log(`Task executed at ${new Date().toISOString()}`);
    isRunning = true;
  } catch (error) {
    console.error("Task failed:", error);
    isRunning = false;
  }
};

const cronJob = new CronJob();
cronJob.schedule("*/1 * * * *", task);
cronJob.start();

app.get("/", (req: Request, res: Response) => {
  res.send("Express server with TypeScript and a running cron job!");
});

app.get("/stop-cron", (req: Request, res: Response) => {
  cronJob.stop();
  isRunning = false;
  res.send("Cron job stopped.");
});

app.get("/start-cron", (req: Request, res: Response) => {
  cronJob.start();
  res.send("Cron job started.");
});

app.get("/status", (req: Request, res: Response) => {
  const status = cronJob.getStatus();
  res.json({
    status: status.isRunning ? "running" : "stopped",
    lastRun: status.lastRun ? status.lastRun.toISOString() : "never",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
