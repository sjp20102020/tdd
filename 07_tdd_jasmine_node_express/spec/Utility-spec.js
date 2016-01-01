describe("Test Utility", function(){
    var utility = require("../src/Utility.js");

    beforeEach(function(){
    console.log("in forEach");
    });

    describe("Test calculate", function(){
        it("should return 10 when pass 8 and 2", function(){
            expect(utility.calculate(8,2)).toBe(10);
        });


        it("should return null when pass null", function(){
            expect(utility.calculate(null, null)).toBeNull();
        });



    });


});
