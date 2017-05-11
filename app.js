var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Location = require("./models/location"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    seedDB = require("./seeds"),
    Visit = require("./models/visit");

//requiring routes
var commentRoutes = require("./routes/comments"),
    locationRoutes = require("./routes/locations"),
    indexRoutes = require("./routes/index"),
    visitRoutes = require("./routes/visits"),
    distilleryRoutes = require("./routes/locations/distilleries")

mongoose.connect("mongodb://localhost/Spirit_collections");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database
seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "57e27a326e0aee63403d9ad4",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/locations", locationRoutes);
app.use("/locations/:id/comments", commentRoutes);
app.use("/locations/:id/visits", visitRoutes);


app.listen(process.env.PORT, process.env.IP, function () {
    console.log("The Server Has Started!");
});
