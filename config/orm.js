//  Create an orm.js file inside config directory.

// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.


// selectAll()
// insertOne()
// updateOne()/

// importing the connection
var connection = require('../config/connection');
// setting up a function that will go the mysql commands in order to retrieve info back


// orm obj
var orm = {
    all: function(table,cb){
        var queryStr = 'select * from ' + table + ';' ;
        connection.query(queryStr, function(err, res){
            if(err) throw err;
            cb(res);
        })
    },
    // insert
    insert: function(burgerObject, callB){
        console.log('orm:', burgerObject)
        connection.query('insert into burgers set ?',
        {
            // wasn't console loggint out name of burger because i had passed in the obj 'burger_name:burgerName
            burger_name:burgerObject.burger_name,
            // need to keep this devoured pro to console log to work bench
            devoured:false
        },function(err,resp){
            if(err) throw err;
            callB(resp);
        });
    },
    // update

    update: function(burgId,condition, cb){
        connection.query('update burgers set? where?',
        {
            id:burgId
        },
        {
            devoured: true
        },function(err,res){
            if(err) throw err
            cb(res)
        })
        console.log(res.affectedRows, 'test')
    }
}

module.exports= orm;