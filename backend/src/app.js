const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const app = express();
const routes = require('./routes');
const PORT = 3333;


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;