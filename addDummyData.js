const mongoose = require('mongoose');
require('dotenv').config();

// Load environment variables from .env file
let uri = 'mongodb+srv://karthikeyaburla:Lyvm17m9EXSJ2Jq3@cluster0.qwit7a9.mongodb.net/';


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// Define the Log model schema (assuming it's the same as in your project)
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

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to generate random log data without faker
const generateRandomLog = () => ({
    level: getRandomElement(['info', 'error', 'warning']),
    message: getRandomSentence(),
    resourceId: getRandomUUID(),
    timestamp: getRandomDate(),
    traceId: getRandomUUID(),
    spanId: getRandomUUID(),
    commit: getRandomCommitSha(),
    metadata: {
        parentResourceId: getRandomUUID(),
    },
});

// Helper function to get a random element from an array
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

// Helper function to get a random sentence
const getRandomSentence = () => `This is a random sentence. ${getRandomElement(['Lorem ipsum', 'Dolor sit amet', 'Consectetur adipiscing elit'])}.`;

// Helper function to get a random UUID
const getRandomUUID = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

// Helper function to get a random date in the past
const getRandomDate = () => new Date(Date.now() - Math.floor(Math.random() * 86400000 * 365));

// Helper function to get a random git commit SHA
const getRandomCommitSha = () => getRandomUUID();

// Function to add dummy data to the database
const addDummyData = async () => {
    try {
        // Clear existing data in the Log collection
        await Log.deleteMany({});

        // Generate and insert 100 rows of dummy data
        const dummyData = Array.from({ length: 100 }, generateRandomLog);
        await Log.insertMany(dummyData);

        console.log('Dummy data added successfully!');
    } catch (error) {
        console.error('Error adding dummy data:', error);
    } finally {
        // Disconnect from the MongoDB database
        mongoose.disconnect();
    }
};

// Execute the function to add dummy data
addDummyData();
