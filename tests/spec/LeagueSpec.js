describe("League", function(){
    var league;
    beforeEach(function() {
        league = new TotterUp.League({});
    });
    
    it("exists", function(){
        expect(league).toBeDefined();
    });
    
    describe("adding a player", function() {
        it("increments player count by 1", function() {
            league.addPlayer({name: "Amy"});
            expect(league.playerCount()).toEqual(1);
        });
    });
    
    describe("adding an event", function() {
        it("increments event count by 1", function() {
            league.addEvent({name: "France 2014"});
            expect(league.eventCount()).toEqual(1);
        });
    });
    
    describe("loading a league", function() {
        beforeEach(function() {
            league = new TotterUp.League
            ({
                name: "Shuffling Hands", 
                players: [
                    {name: "Amy"}, 
                    {name: "Conrad"}
                ],
                events: [
                    {name: "France 2013"}, 
                    {name: "Christmas 2013"},
                    {name: "Easte 2014"}
                ]
            });
        });
            
        it("exists", function(){
            expect(league).toBeDefined();
        });
        
        it("has a name", function(){
            console.log("test league has a name");
            console.log(league);
            expect(league.name).not.toEqual("");
        });
        
        it("has players", function(){
            expect(league.players.length).not.toEqual(0);
        });
        
        it("has events", function(){
            expect(league.events.length).not.toEqual(0);
        });
    });
});