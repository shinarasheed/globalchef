const express = require("express");
const morgan = require("morgan");
const classRouter = require("./routes/classRoute");
const userRouter = require("./routes/userRoute");
const reviewRouter = require("./routes/reviewRoute");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const app = express();

// app.use(helmet());

// morgan middleware for logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// body parser middleware, reading data from body into req.body
app.use(express.json({ extended: false, limit: "10kb" }));

// mount routes
app.use("/api/class", classRouter);
app.use("/api/users", userRouter);
// app.use('/api/v1/reviews', reviewRouter);

module.exports = app;
