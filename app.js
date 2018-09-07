// Boilerplate to setup the app
var express = require("express");
var app = express()
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars')
app.set('port', 8001);

// Render homepage
app.get('/', function(req, res){
    res.render('home');
});

app.listen(app.get('port'), function(){
    console.log('Express started on local host!');
});