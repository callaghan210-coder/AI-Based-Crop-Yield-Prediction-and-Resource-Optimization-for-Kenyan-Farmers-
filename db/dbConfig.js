const sql = require('mssql');

const dbConfig = {
    server: 'CALLAGHAN\SQLEXPRESS',        // Server name (without the instance)
    port: 1433,                 // Use the correct port number here
    database: 'master',      // Database name
    driver: 'msnodesqlv8',      // Driver for Windows Authentication
    options: {
        encrypt: false,                  // Use SSL encryption if needed
        trustServerCertificate: true,    // Set to true for local testing
        trustedConnection: true          // Windows Authentication
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

