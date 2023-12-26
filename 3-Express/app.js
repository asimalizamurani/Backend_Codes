        // <------------------- Routing ---------------->

const express = require('express')
const app = express();

app.use(function(req, res, next) {
    // console.log(req)
    console.log("middleware is working");
    next(); // next() is used to go another page
});

app.use(function(req, res, next) {
    console.log("Second middleware is working");
    next();
});

app.get('/', function (req, res) {
  res.send('I am learning express by sheryians coding school')
})

app.get('/profile', function (req, res) {
    res.send("We are very excited to welcome you in our profile page");
})

app.listen(3000)