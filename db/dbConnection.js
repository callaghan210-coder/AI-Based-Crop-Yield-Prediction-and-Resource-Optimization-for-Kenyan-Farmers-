// db/dbConnection.js
const sql = require('mssql');
const config = require('./dbConfig');

async function connectToDatabase() {
    try {
        const pool = await sql.connect(config);
        console.log('Connected to SQL Server with Windows Authentication');
        return pool;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
}

module.exports = { connectToDatabase, sql };
