// query-interface.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); // Import the cors middleware
require('dotenv').config();

const app = express();
const port = 4000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'log-viewer/build')));



const uri = 'mongodb+srv://karthikeyaburla:Lyvm17m9EXSJ2Jq3@cluster0.qwit7a9.mongodb.net/';

mongoose.connect(uri);

const Log = mongoose.model('Log', {
    level: String,
    message: String,
    resourceId: String,
    timestamp: Date,
    traceId: String,
    spanId: String,
    commit: String,
    metadata: {
        parentResourceId: String,
    },
});

app.get('/logs', async (req, res) => {
    try {
        const filters = buildFilters(req.query); // Construct filters based on request query
        const filteredLogs = await Log.find(filters);
        res.json(filteredLogs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'log-viewer/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Query Interface listening at http://localhost:${port}`);
});

// Helper function to build filters
const buildFilters = (query) => {
    const filters = {};

    // Iterate through the query parameters and add them to the filters if they are specified
    for (const key in query) {
        if (query.hasOwnProperty(key) && query[key]) {
            filters[key] = query[key];
        }
    }

    return filters;
};
