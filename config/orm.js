//  Create an orm.js file inside config directory.

// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.


// selectAll()
// insertOne()
// updateOne()/

// importing the connection
var connection = require('../config/connection');

// orm obj
var orm = {
    all: function (table, cb) {
        var queryStr = 'select * from ' + table + ';';
        connection.query(queryStr, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    // insert
    insert: function (burgerObject, callB) {
        console.log('orm:', burgerObject)
        connection.query('insert into burgers set ?',
            {
                // wasn't console loggint out name of burger because i had passed in the obj 'burger_name:burgerName
                burger_name: burgerObject.burger_name,
            }, function (err, resp) {
                if (err) throw err;
                callB(resp);
            });
    },

    // update
    update: function (table, objVals, condition, cb) {
        connection.query(`update ${table} set ? where ?`, [objVals, condition],
            function (err, result) {
                if (err) throw err;
                cb(result);
            });
    }
};

module.exports = orm;

