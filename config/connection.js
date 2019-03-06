var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'ep0nh1dqu6832b28',
  password : 'lqsfknoi998dfm1n',
  database: 'u4fcaw2kux8war5c'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;