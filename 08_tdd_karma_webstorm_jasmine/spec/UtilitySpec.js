describe("Test Suite for CoreModule", function(){
    var coreModule;
    beforeEach(function(){
        coreModule = new CoreModule();
    });

    describe("Test suite for add with 2 paramaters", function(){
        it("should return 10 when pass 4 and 6 as parameters", function(){
            expect(coreModule.add(4,6)).toBe(10);
        });


        it("should not return 10 when pass 1 and 5 as parameters", function(){
            expect(coreModule.add(1,5)).not.toBe(10);
        });

        it("should return 10 when pass 1 and 9", function(){
            expect(coreModule.add(1,9)).toEqual(10);
        });
    });
});