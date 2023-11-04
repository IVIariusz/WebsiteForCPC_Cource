const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Nazwa hosta MySQL
  user: 'root',      // Nazwa użytkownika MySQL
  database: 'przykladowa_baza_danych', // Nazwa bazy danych
  password: 'Mariu52ek08' // Hasło użytkownika MySQL
});

connection.connect();

connection.query('SELECT * FROM users', function (err, results, fields) {
  if (err) throw err;
  console.log('Dane użytkowników:');
  console.log(results);
});

connection.end();