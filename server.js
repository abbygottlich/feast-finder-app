const express = require("express");
const bodyParser = require("body-parser");
const port = 5000;
const restaurantRouter = require("./Routes/Restaurants");
const app = express();
const cors = require("cors");

// using cors to connect the server to the browser
app.use(cors())
app.use(bodyParser.json())
app.use("/restaurants", restaurantRouter)

app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`using port ${port}`)
});