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