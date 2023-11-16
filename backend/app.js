require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const forumsRouter = require("./routes/forums");
const answersRouter = require("./routes/answer");
const authRouter = require("./routes/authentication");
const auth = require("./middleware/auth");
const cors = require("cors");
const app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/forums", forumsRouter);
app.use("/api/answers", answersRouter);
app.use("/api/auth", authRouter);
app.get('*', function (req, res) {
    res.status(404).send('404 Not Found');
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
