const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    database: 'general',
    user: 'root',
    password: '#Ash28jun#'

})

module.exports = pool.promise();