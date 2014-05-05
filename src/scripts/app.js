
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
