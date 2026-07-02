const express = require('express');
const authRouter = require("./routes/auth.routes")      //require all the routes
const interviewRouter = require("./routes/interview.routes")
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

//using all the routes here
app.use('/api/auth', authRouter);                       
app.use('/api/interview', interviewRouter);

module.exports = app;