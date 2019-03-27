// Config Setup


// Inside your burger directory, create a folder named config.
// Create a connection.js file inside config directory.



// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.



// Export the ORM object in module.exports.

var mysql = require('mysql');
var connection = mysql.createConnection(
    {
        host:'localhost',
        password:'12345',
        port:3306,
        user:'root',
        database:'burgers_db'
    }
);
connection.connect(function(err){
    if(err) {
        console.log('Error:');
    }
    console.log('connected id: '+ connection.threadId)
});
module.exports = connection;