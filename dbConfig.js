const sql = require('mssql/msnodesqlv8');

const dbConfig = {
    server: 'CALLAGHAN\\MSSQLSERVER2019',
    database: 'SmartFarm',
    options: {
        encrypt: false,                 // Optional, set to true if required by server
        trustServerCertificate: true,   // For local development
    },
    driver: 'msnodesqlv8',             // Using msnodesqlv8 driver for Windows Authentication
    options: {
        trustedConnection: true        // Use Windows Authentication
    }
};

async function connectToDB() {
    try {
        let pool = await sql.connect(dbConfig);
        console.log("Connected to SQL Server successfully with Windows Authentication!");
        return pool;
    } catch (error) {
        console.error("Database connection failed: ", error);
    }
}

module.exports = { sql, connectToDB };

