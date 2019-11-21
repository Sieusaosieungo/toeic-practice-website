require('dotenv').config();
require('./db/mongoose');

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT;
const errorHandler = require('./middlewares/errorHanlder');

app.use(express.json());
app.use(cors());

app.use('/api/users', require('./routes/user.route'));

app.use(express.static(path.join(__dirname, '../static')));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
