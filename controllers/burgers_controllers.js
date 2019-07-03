var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.burgers.findAll({
    where: {burger : req.body.id}
  })
  .then(burger => {
    res.render("index", {burger: burger});
  })
});


router.post("/api/burgers", function (req, res) {
  db.burgers.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured,

  })
  .then(burger => {
    burger_
    res.json(burger);
  })
});

router.put("/api/burgers/:id", function (req, res) {
  db.burgers.update({
    devoured: true
  }, {
      where: {
        id: req.params.id
      }
    }).then(updated => {
      res.json(updated);
    });


});


// Export routes for server.js to use.
module.exports = router;