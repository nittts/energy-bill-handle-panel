import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "dotenv";
import "express-async-errors";
import rateLimiterMiddleware from "./middlewares/raterLimiter.middleware";

import routes from "./routes";

config();
const app = express();

// Parse body from requests
app.use(express.json());

// Rate limit requests
app.use(rateLimiterMiddleware);

// Cors protection and headers
app.use(cors());

// Protect the app!
app.use(helmet());

// Define routes
routes(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running!");
});

export default app;
