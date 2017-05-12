var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: String,
    price: String.parseInt(),
    description: String,
    premisis: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location"
        },
        name: String
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Product", productSchema);
