
const fetch = require("node-fetch");

exports.list = function list(req, res) {
    // req.params come from the route "/:city,:state" in your routes file
    const URL = "https://api.yelp.com/v3/businesses/search?location=" + req.params.city + "," + req.params.state + "&limit=50"
    fetch(URL, {
        mode: "no-cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': require("../keys").keys.APIKey,
        },
        credentials: 'same-origin',
        body: JSON.stringify()
    })
        .then(res => res.json())
        // to fetch all data, uncomment the line below
        // .then(data => data.businesses.map((restr) => { console.log(restr) }))
        // returning only one random restaurant at a time
        .then(data => {
            const randomRestaurant = data.businesses[Math.floor(Math.random() * data.businesses.length)];
            return res.json(randomRestaurant)
        })
}