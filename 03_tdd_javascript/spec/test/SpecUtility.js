

describe("utility method isempty", function(){
    var Utility = require('../../js/Utility');
    var utility = null;


    beforeEach(function(){
        utility = new Utility();

    });


    describe("check for empty string", function(){
        it("should return true when empty string is passed", function(){
            expect(utility.isEmpty(" ")).toBe(true);
        });


    });


});