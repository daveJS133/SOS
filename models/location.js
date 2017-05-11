var mongoose = require("mongoose");

var locationSchema = new mongoose.Schema({
   locationType: {
      type: String,
      required: true
   },
   name: {
      type: String,
      index: {
         unique: true
      },
      required: true
   },
   image: String,
   description: String,
   area: String,
   town: String,
   owner: String,
   feature: {
      hasShop: String,
      hasGarden: String,
      hasBar: String,
      hasEvent: String,
      hasParking: String,
      hasSampling: String,
      hasTour: String,
      hasFood: String
   },

   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
   }],
   visits: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Visit"
   }]
});

module.exports = mongoose.model("Location", locationSchema);
