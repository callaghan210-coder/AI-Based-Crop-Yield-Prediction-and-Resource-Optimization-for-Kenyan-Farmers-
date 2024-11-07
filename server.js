// server.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/landing.html');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
