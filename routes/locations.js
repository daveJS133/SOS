var express = require("express");
var router = express.Router();
var Location = require("../models/location");
var middleware = require("../middleware");
var front = require("../public/scripts/front");
var distilleryRoutes = require("./locations/distilleries");

router.use("/distilleries", distilleryRoutes);

router.get("/", front.checkMalts, function (req, res) {
    if (req.queryArray.length < 1) {
        Location.find().sort('name').exec({}, function (err, allLocations) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("locations/index", {
                    locations: allLocations,
                    checkBoxes: req.query
                });
            }
        });

    }
    else {
        Location.find({
            $or: req.queryArray
        }).sort('name').exec({}, function (err, allLocations) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("locations/index", {
                    locations: allLocations,
                    checkBoxes: req.query
                });
            }
        });

    }
});

//CREATE - add new location to DB
router.post("/", middleware.isLoggedIn, function (req, res) {

    // get data from form and add to locations array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var feature = {
        hasShop: req.body.chkShop,
        hasGarden: req.body.chkGarden,
        hasBar: req.body.chkBar,
        hasEvent: req.body.chkEvent,
        hasParking: req.body.chkParking,
        hasSampling: req.body.chkSampling,
        hasTour: req.body.chkTour,
        hasFood: req.body.chkFood
    };

    var author = {
        id: req.user._id,
        username: req.user.username
    };




    var newLocation = {
        name: name,
        image: image,
        description: desc,
        author: author,
        feature: feature
    };

    console.log(newLocation);
    // Create a new location and save to DB
    Location.create(newLocation, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        }
        else {

            //redirect back to locations page
            console.log(newlyCreated);
            res.redirect("/locations");
        }
    });

});

//NEW - show form to create new location
router.get("/new", middleware.isLoggedIn, function (req, res) {
    res.render("locations/new");
});

// SHOW - shows more info about one location
router.get("/:id", function (req, res) {
    //find the location with provided ID
    Location.findById(req.params.id).populate("comments").populate("visits").exec(function (err, foundLocation) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(foundLocation)
                //render show template with that location
            res.render("locations/show", {
                location: foundLocation
            });
        }
    });
});

// EDIT LOCATION ROUTE
router.get("/:id/edit", middleware.checkLocationOwnership, function (req, res) {
    Location.findById(req.params.id, function (err, foundLocation) {
        res.render("locations/edit", {
            location: foundLocation
        });
    });
});

// UPDATE LOCATION ROUTE
router.put("/:id", middleware.checkLocationOwnership, function (req, res) {
    // find and update the correct location
    Location.findByIdAndUpdate(req.params.id, req.body.location, function (err, updatedLocation) {
        if (err) {
            res.redirect("/locations");
        }
        else {
            //redirect somewhere(show page)
            res.redirect("/locations/" + req.params.id);
        }
    });
});

// DESTROY LOCATION ROUTE
router.delete("/:id", middleware.checkLocationOwnership, function (req, res) {
    Location.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/locations");
        }
        else {
            res.redirect("/locations");
        }
    });
});


module.exports = router;
