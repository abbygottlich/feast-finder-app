require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const port = 5000;
const restaurantRouter = require("./Routes/Fetch");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// created a SECRET variable in .env file then added it to .gitignore to hide password
mongoose.connect(process.env.SECRET, { useNewUrlParser: true });

const restaurant = require("./routes/Restaurant");

// using cors to connect the server to the browser
app.use(bodyParser.json())
app.use(cors())
app.use("/restaurants", restaurantRouter)
app.use(restaurant);

app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`using port ${port}`)
});