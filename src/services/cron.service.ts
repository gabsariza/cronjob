import * as cron from 'node-cron';

export class CronService {
  private job: cron.ScheduledTask | null = null;
  private isRunning: boolean = false;
  private lastRun: Date | null = null;

  schedule(cronExpression: string, task: () => void): void {
    this.job = cron.schedule(cronExpression, () => {
      task();
      this.lastRun = new Date();
    });
  }

  start() {
    if (this.job) {
      this.job.start();
      this.isRunning = true;
    }
    return this;
  }

  stop() {
    if (this.job) {
      this.job.stop();
      this.isRunning = false;
    }
    return this;
  }

  getStatus(): { isRunning: boolean; lastRun: Date | null } {
    return {
      isRunning: this.isRunning,
      lastRun: this.lastRun,
    };
  }
}