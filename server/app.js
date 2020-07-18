/**
 * @file
 */

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.set('port', 1050);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

app.get('/', (req, res) => {
    res.send('KendallELane.com');
});
app.get('/api', function(req, res) {
    res.send('KendallELane.com API is running');
});

const dribbbleRoutes = require('./routes/dribbble');

app.use('/api/dribbble', dribbbleRoutes);

module.exports = app;
