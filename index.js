var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('Welcome to latur to pune to mumbai');
=======
 res.send('Welcome to pune kothurd');
>>>>>>> 2d820399800124f13982c07dce6c03ea744bc320
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
