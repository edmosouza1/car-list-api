import express from "express";
import winston from "winston";
import marcaRouter from "./src/routes/marcaRoutes.js";
import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

global.fileName = "car-list.json";
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  //level: process.env.NODE_ENV === "development" ? "silly" : "info",
  level: "silly",
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: "trabalho-pratico.log" })],
  format: combine(label({ label: "trabalho-pratico" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());
app.use("/marcas", marcaRouter);

app.listen(3000, async () => {
  try {
    await readFile(fileName);
    logger.info("API Started!");
  } catch (err) {
    logger.error(err);
  }
});
