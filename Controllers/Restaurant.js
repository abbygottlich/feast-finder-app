const Restaurant = require("../models/Restaurant");

// GET request
exports.list = function list(request, response) {
    const userId = request.user._id //this will change when authentication is hooked up
    const rating = request.params.rating
    Restaurant.find({
        // this key should match the key from mLab and the value is equal to whatever the user types in the path
        userId: userId,
        rating: rating
    }).exec().then((restaurants) => {
        return response.json(restaurants);
    });
};

// POST request
exports.create = function create(request, response) {
    const newRestaurant = new Restaurant(
        request.body
    );
    // TODO: set userId to current user once authentication is set up
    newRestaurant.userId = request.user._id // this will come from request.user._id, when authentication is implemented
    newRestaurant.save().then(savedRestaurant => {
        response.json(savedRestaurant);
    });
};