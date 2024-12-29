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
    const cronStatus = cronJob.getStatus();
    
  res.send({ msg: "Server is running", cronStatus });
});

app.get("/stop-cron", (req: Request, res: Response) => {
  const status = cronJob.stop().getStatus();
  isRunning = false;
  res.send({ msg: "Cron job has stopped.", ...status});
});

app.get("/start-cron", (req: Request, res: Response) => {
  const status = cronJob.start().getStatus();
  res.send({ msg: "Cron job has started.", ...status});
});

app.get("/status", (req: Request, res: Response) => {
  const status = cronJob.getStatus();
  res.json({
    status: status.isRunning ? "running" : "stopped",
    lastRun: status.lastRun ? status.lastRun.toISOString() : "never",
    data: status,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
