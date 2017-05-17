const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('./models/area');
const routes = require('./routes');
const { notFound } = require('./handlers');

const app = express();

mongoose.connect(process.env.DB);
mongoose.Promise = global.Promise;

app.use('/', routes);
app.use(notFound);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
