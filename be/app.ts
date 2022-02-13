import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

import indexRouter from "./routes/index";
import bankRouter from "./routes/bank";
import rollsRouter from "./routes/rolls";
import sessionsRouter from "./routes/sessions";

const app = express();

app.use(bodyParser.json());
// TODO: in PROD, restrict origin+port
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/bank", bankRouter);
app.use("/rolls", rollsRouter);
app.use("/session", sessionsRouter);

export default app;
