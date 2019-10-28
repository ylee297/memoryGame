const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '8889',
    database: 'dashboard',
    password: 'root'
});

module.exports = pool.promise();