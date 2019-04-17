const Restaurant = require("../models/Restaurant");

// GET request
exports.list = function list(request, response) {
    const userId = 1 //this will change when authentication is hooked up
    const rating = request.params.rating
    Restaurant.find({
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
    newRestaurant.userId = 1 // this will come from request.user._id, when authentication is implemented
    newRestaurant.save().then(savedRestaurant => {
        response.json(savedRestaurant);
    });
};