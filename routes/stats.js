var express = require('express');
var ncaa = require('ncaa-stats');
var router = express.Router();
 
// get all available sports 
ncaa.sports.getSports().then((data) => {
    console.log(data);
/* GET divisions listing. */
    router.get('/all', function(req, res, next) {
    res.send(data);})
});

 
// get list of seasons for a particular sport (e.g. Men's Basketball') 
ncaa.sports.getSeasons('MSO').then((data) => {
    console.log(data);
/* GET sports seasons listing. */
    router.get('/sport', function(req, res, next) {
    res.send(data);})
});
 

// get list of divisions for a particular sport and season 
ncaa.sports.getDivisions({
    sport: 'MSO', // Football 
    season: '2016' // The 2016-2017 season 
}).then((data) => {
    console.log(data);
/* GET divisions listing for particular sports team. */
    router.get('/season', function(req, res, next) {
    res.send(data);})
});

 
// get statistical categories and available ranking periods for a set of parameters 
ncaa.sports.getSportDivisionData({
    sport: 'MSO', // Football 
    season: 2016, // The season ending in 2016 (i.e. the 2015-2016 season) 
    division: 2, // Division I FBS 
    type: 'individual', // individual statistics 
    gameHigh: false // regular statistics 
}).then((data) => {
    console.log(data);
/* GET divisions FBS individual and regular statistics. */
    router.get('/i-stats', function(req, res, next) {
    res.send(data);})
});

 
ncaa.sports.getSportDivisionData({
    sport: 'MSO', // Football 
    season: 2016, // The 2015-2016 season 
    division: 2, // Division I FCS 
    type: 'team', // team statistics 
    gameHigh: true // game high statistics 
}).then((data) => {
    console.log(data);
/* GET divisions listing team stats. */
    router.get('/t-stats', function(req, res, next) {
    res.send(data);
});
});

module.exports = router;
