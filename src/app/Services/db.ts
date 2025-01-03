import mysql from 'mysql2';

// Vytvoření připojení k MySQL databázi
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});


const promisePool = pool.promise();


export default promisePool;
