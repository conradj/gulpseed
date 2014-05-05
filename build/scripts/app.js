(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

    "use strict";

    var Router = require("./router");
    var League = require("./league");
    var leagues = [];
    // get leagues
    //leagues.push(League.getLeague());  

    // add league
    function addLeague(league) {
      leagues.push(league);  
    }

    function leagueCount() {
        return leagues.length;
    }

    function selectLeague() {
        Router.selectedLeague(
            new League({
                         name: "Shuffling Handsssssadsds", 
                         players: [
                             {name: "Amy"}, 
                             {name: "Conrad"}
                         ],
                         events: [
                             {name: "France 2013"}, 
                             {name: "Christmas 2013"},
                             {name: "Easter 2014"}
                         ]
                     }));
    }
    selectLeague();


// storage

// send off

// debug
//createLeague();
//attachEvents();


    //var event = new TotterUp.Event({name: "France 2014"});
    /// todo
    //var game = event.games[0];//or whatever, from whenever

    //var currentGame = new TotterUp.Game(game, 1); //indexOf(event.games, game)); // how to get the game number for the event

    //ko.applyBindings(league, document.getElementById("league"));
    //}


//    document.getElementById("event-add-button").addEventListener('click', 
//        function() {
//            self.league.events.push(
//                new TotterUp.Event({name: document.getElementById("new-event-name").value})
//                );
//        }, false);

},{"./league":2,"./router":3}],2:[function(require,module,exports){
'use strict';
//require("./event");

var League = (function(data) {
    var self = this;
    
    self.name = data.name || "";
    self.players = ko.observableArray(data.players || []);
    self.events = ko.observableArray(data.events || []);
    //self.events.push(new Event(""));
    
    
    return self;
});

//var League;
//
//    
//League = function(data) {
//    alert("league");
//    var self = this;
//    self.name = data.name || "";
//    self.players = data.players || [];
//    self.events = ko.observableArray(data.events || []);
//    self.events.push(new Event(""));
//    
//    // add players
//    self.addPlayer = function(player) {
//        self.players.push(player);
//    };
//    
//    self.playerCount = function() {
//        return self.players.length;
//    };
//    
//    // remove players
//    
//    // add events
//    self.addEvent = function(event) {
//        self.events.push(event);
//    };
//    
//    self.eventCount = function() {
//        return self.events.length;
//    };
//    
//    return self;
//};

module.exports = League;
},{}],3:[function(require,module,exports){
// http://losrebellos.tumblr.com/post/75469397649/static-class-using-browserify
"use strict";
var Router = module.exports = function() {};

// static public variables
Router.selectedLeague =  ko.observable();
Router.selectedEvent = ko.observable();
Router.selectedGame = ko.observable();

var setViewBindings = function() {
    ko.applyBindings(Router.selectedLeague, document.getElementById("league"));
    //ko.applyBindings(Router.selectedEvent, document.getElementById("event"));
    //ko.applyBindings(Router.selectedGame, document.getElementById("game"));
};

setViewBindings();
},{}]},{},[1])