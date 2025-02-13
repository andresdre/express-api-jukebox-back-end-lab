const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


const trackRouter = require('./controllers/tracks')

app.use(express.json());
app.use(logger('dev'));

app.use(cors({origin: 'http://localhost:5173'}))

app.use('/tracks', trackRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
