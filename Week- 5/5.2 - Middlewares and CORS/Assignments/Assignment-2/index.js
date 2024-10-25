/*
Assignment #2 - Create a middleware that counts total number of requests sent to a server. 
Also create an endpoint that exposes it
*/

import express from 'express'

const app=express();

let requestCount=0;

function countRequests(req, res, next) {
    // Increment the counter for each request
    requestCount++;

    // Pass control to the next middleware or route handler
    next();
}

// Use the middleware for all routes
app.use(countRequests);

app.get('/requestCount', (req, res) => {
    res.send({
        totalRequests: requestCount
    });
});

app.get('*', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});