const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const indexRouter = require("./routes/index");
const bankRouter = require("./routes/bank");
const rollsRouter = require("./routes/rolls");
const sessionsRouter = require("./routes/sessions");

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

console.log("Express is now running at http://localhost:8080");

module.exports = app;
