const express = require("express");
const app = express();
// express acquired

app.get("/", (req, res) => {
    res.send("server created");
})
// server created

app.get("/about", (req, res) => {
    res.send("this is about page")
})

app.get("/home", (req, res) => {
    res.send("this is home page")
})

app.get("/contact", (req, res) => {
    res.send("this is contact page")
})

app.get("/aboutus", (req, res) => {
    res.send("this is about us page")
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
});
