import express from "express";
import "express-async-errors";
import { handleError } from "./errors/handleError";
import { clientsRouter } from "./routes/clients.routes";

export const app = express();

app.use(express.json());

app.use("/clients", clientsRouter);

app.use(handleError);
