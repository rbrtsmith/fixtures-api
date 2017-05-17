const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const { notFound } = require('./handlers');

const app = express();

app.use('/', routes);
app.use(notFound);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
