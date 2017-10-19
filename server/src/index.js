const _ = require('underscore');
const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

// Controllers

function handleRssfeed(req, res) {
    return jsonResponse(res, { message: "Done." });
}

// Helpers

function jsonResponse(res, data, statusCode) {
    if (! statusCode) statusCode = 200;

    res.setHeader('Content-Type', 'application/json');
    res.status(statusCode);
    res.send(JSON.stringify(data));
}

// Validation


// Routes

app.get('/rssfeed', handleRssfeed);

// Run Server

app.listen(port, () => {
    console.log('RSS API serving on port: ' + port);
});