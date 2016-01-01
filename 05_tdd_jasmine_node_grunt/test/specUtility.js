describe("Test Utility methods", function(){
    describe("test Welcome method", function(){
        var core;

        beforeEach(function(){
            core = new CoreModule();
        });

        it("does welcome return a method", function(){
            expect(core.welcome()).toBe("Hello World");
        });

    });


});