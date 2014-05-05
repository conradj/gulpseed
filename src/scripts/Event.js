"use strict";
require("./game");

module.exports = function Event(data) {

    var self = this;
    self.games = [];
    self.name = data.name || "";
    self.eventIndex = data.eventIndex || 0;
    // add game
    self.addGame = function(players) {
        var game = new Game(players);
        self.games.push(game);
    };
    
    self.gameCount = function() {
        return self.games.length;
    };
};