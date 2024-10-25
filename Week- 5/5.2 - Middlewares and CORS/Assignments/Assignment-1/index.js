const express = require("express");

const app = express();

function logDetails(req,res){
    console.log(req.method);
    console.log(`${req.protocol}://${req.get("host")}${req.url}`);
    console.log(new Date());
}
app.use(logDetails);

app.get("*", (req, res) => {
    res.send("Hi there!");
});

// Create a route that responds to POST requests
app.post("*", (req, res) => {
    res.send("Hello!");
});

// Create a route that responds to PUT requests
app.put("*", (req, res) => {
    res.send("Welcome!");
});

// Create a route that responds to DELETE requests
app.delete("*", (req, res) => {
    res.send("Goodbye!");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});




app.listen(3001);