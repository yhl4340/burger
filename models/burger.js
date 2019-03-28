// Model setup



// Inside your burger directory, create a folder named models.
// In models, make a burger.js file.
// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.
// Controller setup


// requiring the orm in the config folder. './' means current folder. since config and models are sibling, no need to go up one dir?
var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    }, 
    insert:function(burgerName, cb){
        console.log('burgerInsert:', burgerName)
        orm.insert(burgerName, function(res){
            cb(res);
        })
    },
    update: function(burgerId, cb){
        var condition = {id: burgerId};
        var devoured = {devoured: true};
          orm.update("burgers", devoured, condition, cb);
      }
    // update: function(burgerId,cb){
    //     orm.update(burgerId, function(resp){
    //         cb(resp)
    //     })
    // } 
}
module.exports = burger;