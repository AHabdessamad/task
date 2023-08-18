

//Modules requirements

const express = require('express');
const app = express();
const morgan = require('morgan'); 
const tourRouter = require('./Routes/tours-routes');
const userRouter = require('./Routes/users-routes');

// 1) Midddlewares : Middleware function that modify the incoming request data (req/res)

app.use(express.json());

app.use((req, res, next ) =>{
  req.requestTime = new Date().toISOString();
  next();
})

//gives infos about the request dev colors state code but 'tiny' no
app.use(morgan('dev'));
// to run the file system in browser mode
app.use(express.static(`${__dirname}/public`));


// 3) ROUTES :Mounting

app.use('/api/v1/tours' ,tourRouter);
app.use('/api/v1/users' ,userRouter)


module.exports = app;