const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const port = 5000;
const findState = require("./frontend/src/components/FindState");
const findCity = require("./frontend/src/components/FindCity");

const app = express()
app.use(bodyParser)

app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`using port ${port}`)
})

let returnedRestaurants = []

// create a loop component for the offset value
// create a function component for the location city/state values
fetch("https://api.yelp.com/v3/businesses/search?location=FortWorth," + { findState } + "&limit=50", {
    mode: "no-cors",
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        'Authorization': require("./keys").keys.APIKey,
    },
    credentials: 'same-origin',
    body: JSON.stringify()
})
    .then(res => res.json())
    // .then(data => data.businesses.map((restr) => { console.log(restr) }))
    .then(data => console.log(data.businesses[Math.floor(Math.random() * data.businesses.length)]));