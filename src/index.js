/* eslint-disable no-console */
require('dotenv').config();
require('./db/mongoose');

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');

const app = express();
const axios = require('axios');
const cron = require('node-cron');

const port = process.env.PORT;
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use(cors());

app.use(fileUpload({ parseNested: true }));
app.use('/api/users', require('./routes/user.route'));
app.use('/api/new-word-topics', require('./routes/newWordTopic.route'));
app.use('/api/new-words', require('./routes/newWord.route'));
app.use('/api/parts', require('./routes/part.route'));

// trick request
app.get('/', (req, res) => res.send('wake up'));

cron.schedule('*/5 * * * *', () => {
  axios
    .get('https://toeic-practice.herokuapp.com/')
    .then(response => {
      // handle success
      console.log(response.data);
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    .finally(() => {
      // always executed
    });
});

app.use(express.static(path.join(__dirname, '../static')));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
