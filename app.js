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
    myContext.musicPlayer = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/342371943&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
    res.render('classical', myContext);
});

// Render lofi hip-hop page
app.get('/lofi', function(req, res){
    var myContext = {};
    myContext.showTimer = true;
    myContext.bodyId = "lofiBody";
    myContext.buttonId = "lofiButton";
    myContext.musicPlayer = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/300494469&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
    res.render('lofi', myContext);
});

// Render ambient page
app.get('/ambient', function(req, res){
    var myContext = {};
    myContext.showTimer = true;
    myContext.bodyId = "ambientBody";
    myContext.buttonId = "ambientButton";
    myContext.musicPlayer = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/154856346&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
    res.render('ambient', myContext);
});

// Render about page
app.get('/about', function(req, res){
    res.render('about');
});

app.listen(app.get('port'), function(){
    console.log('Express started on local host!');
});