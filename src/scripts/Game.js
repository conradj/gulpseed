"use strict";
require("./GameScore");

module.exports = function Game(data) {
    data = data || {};
    var self = this;
    self.scores = data.scores;
    self.dateStarted = data.dateStarted || "28th May 2014"; ///todo date.js this!
    
    self.resetScores = function(players) {
        self.scores = [];
        if(players) {
            for(var index in players) {
                var score = new GameScore(players[index], 0);
                self.scores.push(score);
            }
        }
    };
    return self;
   /* // save scores
    self.savePlayerScore = function(player, score) {
        // if player exists in scores array then update
        var playerScoreMatch = ko.utils.arrayFirst(self.scores, function(playerScore) {
            return playerScore.player().name == player.name;
        });

        if (playerScoreMatch) {
            playerScoreMatch.score = score;
        } else {
          self.scores.push(new TotterUp.GameScore(player, 0););
        }
    };*/
};