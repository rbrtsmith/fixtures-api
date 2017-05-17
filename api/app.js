const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('./models/area');
const routes = require('./routes');
const { notFound } = require('./handlers');

const app = express();

mongoose.connect(process.env.DB);
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);
app.use(notFound);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
