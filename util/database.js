const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    database: 'general',
    user: 'root',
    password: '#Ash28jun#'

})

// pool.execute('INSERT INTO expenses(amt,desc,type) VALUES(?,?,?)',[500,'asdasd','Movie']).then(result=>console.log(result)).catch(err=>console.log(err));

module.exports = pool.promise();