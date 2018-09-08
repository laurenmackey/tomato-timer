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

// Render classical page
app.get('/classical', function(req, res){
    var myContext = {};
    myContext.showTimer = true;
    myContext.bodyId = "classicalBody";
    myContext.buttonId = "classicalButton";
    res.render('classical', myContext);
});

// Render lofi hip-hop page
app.get('/lofi', function(req, res){
    var myContext = {};
    myContext.showTimer = true;
    res.render('lofi', myContext);
});

// Render ambient page
app.get('/ambient', function(req, res){
    var myContext = {};
    myContext.showTimer = true;
    res.render('ambient', myContext);
});

// Render about page
app.get('/about', function(req, res){
    res.render('about');
});

app.listen(app.get('port'), function(){
    console.log('Express started on local host!');
});