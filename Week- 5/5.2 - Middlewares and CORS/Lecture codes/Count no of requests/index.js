const express = require("express");

const app = express();

let requestCount=0;

function increaseCount(req,res,next){
    // req.name="devesh"
    // update req objects


    requestCount=requestCount+1;
    console.log("No of requests=  "+requestCount);

    // res.json({
    //     msg:"invalid route"
    // })
    // ends the request-response cycle
    
    
    next();
    
}
app.use(increaseCount) // applies to all routes


app.get("/sum", function(req, res) {
    // increaseCount(req,res);
    // If the middleware is called this way, it is nothing more than a mere function
    // the function wont have access to req & res objects

    const a = parseInt(req.query.a); //parse to int or will be interpreted as string
    const b = parseInt(req.query.a);
    console.log(req.name)

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    // increaseCount(req,res);
    
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a - b
    })
});

app.listen(3000);