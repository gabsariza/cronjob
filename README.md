# CronJob

This project is an Express server with a cron job implemented using TypeScript and `node-cron`. The cron job runs every minute and logs the execution time. The server provides endpoints to start, stop, and check the status of the cron job.

## Prerequisites

- Node.js
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cronjob.git
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
{ "message": "Server is running" }
```

### GET /stop-cron
Stops the cron job.

Example:
```bash
curl http://localhost:3000/stop-cron
```
Response:
```json
{ "message": "Cron job stopped" }
```

### GET /start-cron
Starts the cron job.

Example:
```bash
curl http://localhost:3000/start-cron
```
Response:
```json
{ "message": "Cron job started" }
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
  "running": true,
  "lastRunTime": "2023-10-05T12:34:56.123Z"
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
