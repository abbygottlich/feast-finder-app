const mongoose = require("mongoose");

let restaurantSchema = new mongoose.Schema({

    name: String,
    genre: String,
    price: String,
    location: String,
    rating: String,
    userId: String

});

let Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;