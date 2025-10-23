import express from "express";
const app = express();
import lensesRouter from "../routes/lenses";

app.use('/lenses', lensesRouter);
