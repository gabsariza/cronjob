# CronJob

This project is an Express server with a cron job implemented using TypeScript and `node-cron`. The cron job runs every minute and logs the execution time. The server provides endpoints to start, stop, and check the status of the cron job.

# Overview
This application is an Express server built with TypeScript that includes a cron job using the node-cron library. The cron job is scheduled to run every minute and logs the execution time. The server provides several endpoints to manage the cron job, including starting, stopping, and checking its status.

## Key Features:
- **Express Server**: A web server built using the Express framework.
- **TypeScript**: Strongly typed JavaScript for better development experience and fewer runtime errors.
- **Cron Job**: Scheduled tasks using node-cron that run every minute.
- **Endpoints**: RESTful API endpoints to interact with the cron job.

## Project Structure:
- **src/index.ts**: The main entry point of the server, setting up routes and starting the Express server.
- **src/services/cron.service.ts**: Contains the CronService class that manages the cron job, including scheduling, starting, stopping, and checking the status of the job.

## Endpoints:
- **GET /**: Returns a message indicating that the server is running.
- **GET /stop-cron**: Stops the cron job.
- **GET /start-cron**: Starts the cron job.
- **GET /status**: Returns the status of the cron job, including whether it is running and the last run time.

## Prerequisites

- Node.js
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gabsariza/cronjob.git
   cd cronjob
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   (or `yarn install`)

## Running the Server
To start the server, run:
```bash
npm start
```
The server will be running on http://localhost:3000.

## Endpoints
### GET /
Returns a message indicating that the server is running.

Example:
```bash
curl http://localhost:3000/
```
Response:
```json
{
  "msg": "Server is running",
  "cronStatus": {
    "isRunning": true,
    "lastRun": null
  }
}
```

### GET /stop-cron
Stops the cron job.

Example:
```bash
curl http://localhost:3000/stop-cron
```
Response:
```json
{
  "msg": "Cron job has stopped.",
  "isRunning": false,
  "lastRun": "2024-12-29T17:13:00.365Z"
}
```

### GET /start-cron
Starts the cron job.

Example:
```bash
curl http://localhost:3000/start-cron
```
Response:
```json
{
  "msg": "Cron job has started.",
  "isRunning": true,
  "lastRun": "2024-12-29T17:13:00.365Z"
}
```

### GET /status
Returns the status of the cron job, including whether it is running and the last run time.

Example:
```bash
curl http://localhost:3000/status
```
Response:
```json
{
  "status": "running",
  "lastRun": "2024-12-29T16:57:00.660Z",
  "data": {
    "isRunning": true,
    "lastRun": "2024-12-29T16:57:00.660Z"
  }
}
```
**OR**
```json
{
  "status": "stopped",
  "lastRun": "2024-12-29T16:57:00.660Z",
  "data": {
    "isRunning": false,
    "lastRun": "2024-12-29T16:57:00.660Z"
  }
}
```

## Project Structure
src
index.ts: Main entry point of the server.
cron.service.ts: Contains the CronService class that manages the cron job.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
gabsariza
