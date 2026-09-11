import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware } from "./utils/error.js";

import config from "./config/index.js";
import logger from "./logger.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from index.js of User Service");
});

app.get("/health", (req, res) => {
    res.send("OK");
});

app.use(errorMiddleware);

app.listen(config.port, () => {
    logger.info(`User Service running on port ${config.port}`);
});