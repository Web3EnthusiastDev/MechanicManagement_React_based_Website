const oracledb = require('oracledb');
const express = require('express');
const app = express();

// Oracle DB configuration
const dbConfig = {
  user: 'SYS', // Replace with your Oracle username
  password: 'Mazhar123!', // Replace with your Oracle password
  connectString: 'localhost:1521/ORCL', // Replace with your Oracle connect string
  privilege: oracledb.SYSDBA, // Optional if connecting as SYS
};

// Connect to the Oracle database
async function connectToDatabase() {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('Connected to Oracle Database!');
    
    // Example Query
    const result = await connection.execute('SELECT * FROM your_table_name'); // Replace with your table
    console.log(result.rows);

    await connection.close();
    return result.rows;
  } catch (err) {
    console.error('Error connecting to Oracle Database:', err);
  }
}

// Example API route
app.get('/api/data', async (req, res) => {
  const data = await connectToDatabase();
  res.json(data);
});

// Start the server
app.listen(5000, () => {
  console.log('Backend server is running on http://localhost:5000');
});
