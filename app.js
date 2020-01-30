const express = require('express');
const morgan = require('morgan');
const classRouter = require('./routes/classRoute');
const userRouter = require('./routes/userRoute');
const reviewRouter = require('./routes/reviewRoute');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const app = express();

// app.use(helmet());

// morgan middleware for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// API rate limiter middleware to limit req from one Ip
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many Request from this IP, please try again in an hour'
// });
// app.use('/api', limiter);

// body parser middleware, reading data from body into req.body
app.use(express.json({ extended: false, limit: '10kb' }));

// Data sanitization against NoSQL query injection
// app.use(mongoSanitize());

// Data sanitization against XSS attack
// app.use(xss());

//  Prevent parameter pollution
// app.use(
//   hpp({
//     whitelist: [
//       'duration',
//       'ratingsQuantity',
//       'ratingsAverage',
//       'maxGroupSize',
//       'difficulty',
//       'price'
//     ]
//   })
// );


// mount routes
app.use('/api/class', classRouter);
app.use('/api/users', userRouter);
// app.use('/api/v1/reviews', reviewRouter);


module.exports = app;
