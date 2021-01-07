var mysql      = require('mysql');

var mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password: '12345',
  database: 'mysql'
  
});


module.exports = mysqlConnection