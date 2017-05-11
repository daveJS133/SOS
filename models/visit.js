var mongoose = require("mongoose");

var visitSchema = mongoose.Schema({
        date: String,
        author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Visit", visitSchema);