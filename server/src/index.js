const _ = require('underscore');
const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

// Controllers

function handleRssfeed(req, res) {
    let data = {
        message: "RSS feed properly parsed.",
        data: undefined
    };

    const rssUrl = req.query.rss_url;
    if (!required(rssUrl) || ! validUrl(rssUrl)) {
        data.message = "Invalid url";
        return jsonResponse(res, data, 422);
    }

    return jsonResponse(res, data);
}

// Helpers

function jsonResponse(res, data, statusCode) {
    if (! statusCode) statusCode = 200;

    res.setHeader('Content-Type', 'application/json');
    res.status(statusCode);
    res.send(JSON.stringify(data));
}

// Validation

function required(value) {
    return value !== undefined;
}

function validUrl(value) {
    return /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(value);
}

// Routes

app.get('/rssfeed', handleRssfeed);

// Run Server

app.listen(port, () => {
    console.log('RSS API serving on port: ' + port);
});