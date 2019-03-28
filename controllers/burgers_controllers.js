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
  //   using the burger.all method and passing data as the argv
  burger.all(function(data) {
    var hbsObj = {
      burgers: data,
      // devoured:false
    };
    // console.log('all:', JSON.stringify(data));
    // rendering the data via handlebars
    resp.render("index", hbsObj);
  });
});

router.post("/api/burgers", function(reqSent, rly) {
  console.log('data:', reqSent.body);
  burger.insert(reqSent.body, function() {
    rly.redirect("/");
  });
});


router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });


// router.put("/api/burgers/:id", function (req, re) {
//     var condition = req.params.id + "id";
//     console.log("condition", condition);
//     burger.update(
//         {
//             devoured: true
//         },
//         condition,
//         function (data) {
//             if (data.changedRows == 0) {
//                 re.redirect("/index");
//                 console.log("update", data);

//                 return re.status(404).end();
//             } else {
//                 re.status(200).end();
//             }
//         }
//     );
});


module.exports = router;
