describe("Utility Program", function(){

    var core;
    beforeEach(function(){
        core = new CoreModule();
    });

    describe("Test Welcome return value", function(){
        it("should return hello world when called", function(){
            expect(core.welcome()).toBe("Hello World");
        });
    });

    describe("Test calculate", function(){
        it("should return 10 when pass 8 and 2", function(){
            expect(calculate(8,2)).toBe(10);
        });
    });
});