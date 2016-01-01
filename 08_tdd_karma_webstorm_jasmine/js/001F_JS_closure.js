/*
 http://javascript.info/tutorial/initialization

 * In JavaScript, all local variables and functions are properties of the special internal object,
 * called LexicalEnvironment.
 * The top-level LexicalEnvironment in browser is window. It is also called a global object.
 *
 * */

var x = 10;
var fn1 = function () {
    console.log("in fn1");
};
console.log(window);