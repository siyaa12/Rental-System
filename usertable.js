var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database:'20bcs195'
});
 
connection.connect(function(err) {
  if (err) {
    console.log('error connecting: ' );
    return;
  }
 
  console.log('connected with database successfully');
});