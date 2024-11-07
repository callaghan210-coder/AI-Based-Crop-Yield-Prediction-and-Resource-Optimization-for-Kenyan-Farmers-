// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { connectToDatabase, sql } = require('../db/dbConnection');

// Register route
router.post('/register', async (req, res) => {
    const { username, password, email, fullName } = req.body;

    try {
        const pool = await connectToDatabase();
        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.request()
            .input('Username', sql.NVarChar, username)
            .input('PasswordHash', sql.NVarChar, hashedPassword)
            .input('Email', sql.NVarChar, email)
            .input('FullName', sql.NVarChar, fullName)
            .query(`INSERT INTO Users (Username, PasswordHash, Email, FullName) VALUES (@Username, @PasswordHash, @Email, @FullName)`);

        res.send('Registration successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const pool = await connectToDatabase();
        const result = await pool.request()
            .input('Username', sql.NVarChar, username)
            .query(`SELECT * FROM Users WHERE Username = @Username`);

        const user = result.recordset[0];

        if (user && await bcrypt.compare(password, user.PasswordHash)) {
            res.send('Login successful');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
});

module.exports = router;
