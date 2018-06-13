
var express = require("express");
var router = express.Router();

var request = require("request");

router.get("/", function(req, res) {
    res.render("landing");
});
  

router.get("/search", function(req, res) {
    var movieTitle = req.query.title;
    var movieYear = req.query.year;
    var apiKey = "&apikey=thewdb";
    var apiUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&y=" + movieYear + apiKey;
    request(apiUrl, function(error, response, body) {
        if(!error && response.statusCode === 200) {
            var movieData = JSON.parse(body);
            if (movieData["Error"] || movieData["Response"] === "False") {
                res.render("landing");
            } else {
                res.render("landing", {movieData: JSON.parse(body)});
            }        
        } else {
            res.render("landing");
        }
    });
 });

module.exports = router;