const Restaurant = require("../Models/Restaurant");

// GET request
exports.list = function list(request, response) {
    const userId = request.user._id
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
    newRestaurant.userId = request.user._id
    newRestaurant.save().then(savedRestaurant => {
        response.json(savedRestaurant);
    });
};

// UPDATE
exports.update = function update(request, response) {

    const restaurant = request.body
    Restaurant.findOneAndUpdate({ _id: restaurant._id }, restaurant)
        .then(updatedRestaurant => {
            response.json(updatedRestaurant);
        });
};

// DELETE
exports.remove = function remove(request, response) {
    const id = request.params.id
    Restaurant.remove({ _id: id })
        .then(() => {
            response.send("deleted");
        });
};