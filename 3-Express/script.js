const express = require('express');
const app = express();
const port = 2000;

app.use(function(req, res, next) {
    console.log("Middleware is working perpectly");
    next();
})

app.get('/', function(req, res) {
    res.send("Welcome to home page");
});

app.get('/profile', function(req, res) {
    res.send("This is our profile page");
});

app.listen(port, ()=> {
    console.log(`Listening on port no ${port}`);
})