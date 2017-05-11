var express = require("express");
var router  = express.Router({mergeParams: true});
var Location = require("../models/location");
var Visit = require("../models/visit");
var middleware = require("../middleware");
var User = require("../models/user");
//Comments New
router.get("/",middleware.isLoggedIn, function(req, res){
    // find location by id
    console.log(req.params.id);
    Location.findById(req.params.id, function(err, location){
        if(err){
            console.log(err);
        } else {
             res.render("/location/:id", {location: location});
        }
    })
});

//Comments Create
router.post("/",middleware.isLoggedIn,function(req, res){
   //lookup location using ID
   Location.findById(req.params.id, function(err, location){
       if(err){
           console.log(err);
           res.redirect("/locations");
       } else {
           var author = {
                id: req.user._id,
                username: req.user.username
            };
            var date = Date();
            var newVisit = {author:author, date:date};
    
        Visit.create(newVisit, function(err, visit){
           if(err){
               req.flash("error", "Something went wrong");
               console.log(err);
           } else {
               console.log(visit);
               
               
               //save visit
               
               visit.save();
               location.visits.push(visit);
               location.save();
               
               req.flash("success", "Successfully added visit");
               res.redirect('/locations/' + location._id);
           }
        });
       }
   });
});


module.exports = router;