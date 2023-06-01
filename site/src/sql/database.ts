import mysql, { Connection } from 'mysql2/promise';

const connection: Connection = await mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'blues'
});

export default connection;
