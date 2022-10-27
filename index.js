//Add server code here!
const express = require("express");
// instantiating a new express server
const app= express();
// selecting network port
const PORT = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");

// middle ware to serve static assets
app.use(express.static("public"));

//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const libraryRoute = require("./routes/library")
app.use("/api/books", libraryRoute)

// GET request to / serves html page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"))
})

// catch all for all unhandled rountes
app.get("*", (req, res) => {
    res.send("noa a valid rounte! try something else")
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`)
})