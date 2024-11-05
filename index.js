// index.js
const express = require('express');
const bodyParser = require('body-parser');
const { connectToDB } = require('./dbConfig');

const app = express();
app.use(bodyParser.json());

connectToDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
