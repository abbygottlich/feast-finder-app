
const fetch = require("node-fetch");

exports.list = function list(req, res) {
    console.log(req.params)
    // create a loop component for the offset value
    const URL = "https://api.yelp.com/v3/businesses/search?location=" + req.params.city + "," + req.params.state + "&limit=50"
    console.log(URL)
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
        // .then(data => data.businesses.map((restr) => { console.log(restr) }))
        .then(data => {
            const randomRestaurant = data.businesses[Math.floor(Math.random() * data.businesses.length)];
            return res.json(randomRestaurant)
        })
}