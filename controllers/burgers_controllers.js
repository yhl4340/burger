// Controller setup

// Inside your burger directory, create a folder named controllers.
// In controllers, create the burgers_controller.js file.
// Inside the burgers_controller.js file, import the following:

// Express
// burger.js

// Create the router for the app, and export the router at the end of your file.

var express = require("express");
// router is another way to give server access
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(request, resp) {
  burger.all(function(data) {
    var hbsObj = {
      burgers: data,
    };
    resp.render("index", hbsObj);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log('data:', req.body);
  burger.insert(req.body, function() {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});


module.exports = router;
