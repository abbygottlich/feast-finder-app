const Restaurant = require("../models/Restaurant");

// GET request
exports.list = function list(request, response) {
    const userId = request.params.userId
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
    newRestaurant.save().then(savedRestaurant => {
        response.json(savedRestaurant);
    });
};