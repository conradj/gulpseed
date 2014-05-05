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