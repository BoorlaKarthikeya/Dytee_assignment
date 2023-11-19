// ingestor.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

require('dotenv').config();

app.use(bodyParser.json());

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
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

app.post('/logs', async (req, res) => {
  try {
    const logData = req.body;
    const log = new Log(logData);
    await log.save();
    res.status(201).send('Log ingested successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Log Ingestor listening at http://localhost:${port}`);
});
