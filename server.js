//grab express
var express = require('express');
//create express app
var app = express();

//get instagram package

var ig = require('instagram-node').instagram();

//configure the app
//tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

//set view engine to ejs

app.set('view engine', 'ejs');

//configure instagram app with your access token
ig.use({
    access_token : '1014960026.1677ed0.ca5215caaf3f49e2a5cdf20361705acf',
});


//SET THE ROUTES
//============================================================================================
//home page route - our profile images

app.get('/',function(req,res){
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
        // render the home page and pass in the popular images
        res.render('pages/index', { grams: medias, username:medias[0].user.username });
        });
        
});


//START THE SERVER
//==============================================================================================
app.listen(3001);
console.log('===========STARTED SERVER================');