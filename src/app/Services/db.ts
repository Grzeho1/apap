// lib/db.js
import { IdentificationIcon } from '@heroicons/react/20/solid';
import mysql from 'mysql2';

// Vytvoření připojení k MySQL
const pool = mysql.createPool({
  host: 'sql7.freemysqlhosting.net',       // Například localhost nebo IP adresa serveru
  user: 'sql7753467',
  password: 'tEbj62SLhu',
  database: 'sql7753467',
  waitForConnections: true,     // Čekání na dostupnost připojení
  connectionLimit: 10,          // Maximální počet připojení
  queueLimit: 0                 // Počet čekajících požadavků
});

const promisePool = pool.promise();







export default promisePool;
