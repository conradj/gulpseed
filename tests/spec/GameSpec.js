console.log("start Game tests");
describe("Game", function(){
    var game;
    var players = [{name: "Amy"}, {name: "Conrad"}];
    
    beforeEach(function() {
        game = new TotterUp.Game({players: players});
    });
    
    it("exists", function(){
        expect(game).toBeDefined();
    });
    
    it("default scores of 0 for the players exist", function(){
        expect(game.scores).toBeDefined();
        expect(game.scores.length).toEqual(players.length);
        expect(game.scores[0].score).toEqual(0);
    });
});