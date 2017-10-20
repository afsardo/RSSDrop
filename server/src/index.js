const _ = require('underscore');
const axios = require('axios');
const express = require('express');
const cors = require('cors')
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

    axios.get("https://api.rss2json.com/v1/api.json?rss_url=" + rssUrl).then(response => {
        const status = response.data.status;
        if (status == "ok") {
            console.log("RSS feed properly parsed.");
            const items = _.map(response.data.items, item => {
                console.log("Link: " + item.link + " | Title: " + item.title + " | Description: " + item.description);
                return {
                    link: item.link, 
                    title: item.title, 
                    descriptionc: item.description
                };
            });

            data.data = items;
            return jsonResponse(res, data);
        }

        data.message = "Invalid feed";
        jsonResponse(res, data, 422);
    }).catch(error => {
        console.error("There was an error: " + error);

        data.message = "Invalid url";
        jsonResponse(res, data, 422);
    });
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

// Config Server

app.use(cors());

// Routes

app.get('/rssfeed', handleRssfeed);

// Run Server

app.listen(port, () => {
    console.log('RSS API serving on port: ' + port);
});