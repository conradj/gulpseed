console.log("start app tests");

describe("App", function(){
    
    var app = new TotterUp.App();
    
    it("exists", function(){
        expect(app).toBeDefined();
    });
    
    describe("adding a league", function() {
        it("has an add function", function() {
            app.addLeague({name: "Shuffling Hands"});
        })
        
        it("increments league count by 1", function() {
            expect(app.leagueCount()).toEqual(1);
        });
    });
});