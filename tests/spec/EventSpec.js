console.log("start event tests");
describe("Event", function(){
    
    var event = new TotterUp.Event({});
    var gameStartDate;
    it("exists", function(){
        expect(event).toBeDefined();
    });
    
    it("has a game count of 0", function(){
        expect(event.games.length).toEqual(0);
    });
    
    describe("adding a game", function() {
//        it("has an add game function to add specified players", function() {
//            gameStartDate = Date.now;
//            event.addGame([{name: "Amy" }, { name: "Conrad"}]);
//            console.log(event.games[0].scores[0]);
//            expect(event.games[0].scores[0].player.name).toEqual("c");//[0].player().name).toEqual("Amy");
//        });
//        
//        it("increments game count by 1", function() {
//            expect(event.gameCount()).toEqual(1);
//        });
//        it("has the date/time when the game was added", function() {
//            expect(event.games[0].dateStarted).toEqual(gameStartDate);
//        });
    });
});