describe("The name validator", function(){

    describe("check for empty string", function(){
        it("should return true when the string is empty", function(){
            expect( checkEmpty("  ")).toBe(true);

        });

        it("should be false when the string is not empty", function(){
            expect(checkEmpty("abc")).toBe(false);
        });
    });

});

