/*
VERY GOOD;;DUE;;; http://www.permadi.com/tutorial/jsFunc/index.html
* http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname
* */
//Function Declaration
x();//OK
function x() {
    console.log('x');
};

x();//OK

/*
* Function Declaration
* ===================
 The first form is a function declaration, which looks like this:
 A function declaration is processed when execution enters the context in which it appears, before any step-by-step code is executed. The function it creates is given a proper name (x in the example above), and that name is put in the scope in which the declaration appears.

 Because it's processed before any step-by-step code in the same context, you can do things like this:

 x(); // Works even though it's above the declaration
 function x() {
 console.log('x');
 }

*/





//"Anonymous" function Expression
//y20();///BAD //cannot call here..TypeError: undefined is not a function
var y20 = function () {
    console.log('y21');
};
y20();//OK


//y21();//BAD //ReferenceError: y21 is not defined
y21= function(){
    console.log("in y21");
}
y21();
/*Like all expressions, it's evaluated when it's reached in the step-by-step execution of the code.

 In ES5, the function this creates has no name (it's anonymous).
 In ES6, the function is assigned a name if possible by inferring it from context.
 In the example above, the name would be y.
 Something similar is done when the function is the value of a property initializer.

 */



//Named function Expression


var z = function w() {
    console.log('zw')
};

/*The function this creates has a proper name (w in this case). Like all expressions, this is evaluated when it's reached in the step-by-step execution of the code. The name of the function is not added to the scope in which the expression appears; the name is in scope within the function itself:

 var z = function w() {
 console.log(typeof w); // "function"
 };
 console.log(typeof w);
 */



//Accessor Function Initializer (ES5+)
var obj = {
    value: 0,
    get f() {
        return this.value;
    },
    set f(v) {
        this.value = v;
    }
};
console.log(obj.f);         // 0
console.log(typeof obj.f);

/*
* Note that when I used the function, I didn't use ()! That's because it's an accessor
 * function for a property. We get and set the property in the normal way,
 * but behind the scenes, the function is called.

 You can also create accessor functions with Object.defineProperty, Object.defineProperties,
 and the lesser-known second argument to Object.create.
 */


//Arrow Function Expression (ES6+)
var a = [1, 2, 3];
//var b = a.map(n =>  n * 2);  //do not work yet
//console.log(b.join(", ")); // 2, 4, 6

/*A couple of things about arrow functions:

 Their this is lexically bound, not determined when they're called. This means that the this within them is the same as the this where they're created.

 As you'll have noticed with the above, you don't use the keyword function; instead, you use =>.

 */


//Constructor and Method Declaration (ES6+)  //yet do not work..
/*class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}*/






/*
     Self invoking Annonyms function.
     This pattern will hide names from Global namespace
     * */
(function () {
    console.log("hii");
})();

/*

 http://javascript.info/tutorial/objects

* An object can be created literally, using obj = { ... } syntax.

 Another way of creating an object in JavaScript is to construct it by calling a function with new directive.



 Objects are associative arrays with additional features.
 Assign keys with obj[key] = value or obj.name = value
 Remove keys with delete obj.name
 Iterate over keys with for(key in obj), remember iteration order for string keys is always in definition order, for numeric keys it may change.
 Properties, which are functions, can be called as obj.method(). They can refer to the object as this.
 Properties can be assigned and removed any time.
 A function can create new objects when run in constructor mode as new Func(params).

 It takes this, which is initially an empty object, and assigns properties to it. The result is returned (unless the function has explicit return anotherObject call).

 Names of such functions are usually capitalized.


 */
console.log("===========needs to create object using new====this inner functions=======");
/*
 inner function belons to the this scope
 * */
var setupSomeGlobals17 = function () {
    var num = 666;
    this.gAlertNumber = function () {
        console.log(num);
    }
};
var setup1 = new setupSomeGlobals17();
setup1.gAlertNumber();



console.log("===========needs to create object using new====this inner functions=======");
/*
 inner function belons to the this scope
 * */
var setupSomeGlobals17_ = function () {
    this.num = 666;
    this.gAlertNumber = function () {
        console.log(this.num);
    }
};
var setup1_ = new setupSomeGlobals17_();
setup1_.gAlertNumber();
console.log(setup1_.num);



console.log("================need to create using new====global inner functions======1======");
/*
 * inner function belongs to global/window
 * */
var setupSomeGlobals18 = function () {
    var num = 666;
    gAlertNumber = function () {//cannot use var for gAlertNumber
        console.log(num);
    }
};

var x = new setupSomeGlobals18();//When we do a 'new' then
gAlertNumber();


console.log("================need to create using new====global inner functions======2======");
/*
 * inner function belongs to global/window
 * */
var setupSomeGlobals18_ = function () {
    var num8_ = 666;
    var gAlertNumber8_ = function () {
        console.log(num8_);
    }
};

var x8_ = new setupSomeGlobals18_();//When we do a 'new' then
//x8_.gAlertNumber8_();//TypeError: Object [object Object] has no method 'gAlertNumber8_'
//gAlertNumber8_();//ReferenceError: gAlertNumber8_ is not defined
//NOT SURE HOW TO CALL gAlertNumber8_()



console.log("===============calling a returning nested function==========method1===============");
function f6() {
    var a6 = 20;

    function g6() {
        console.log(a6);
    }

    return g6;
}

var callf6 = f6();
callf6();//method1 callig g6
f6()();//method2 callig g6

var callf6_ = new f6();
callf6_();//method3
new f6()();//method4


console.log("===============calling a returning nested function==========method2===============");
var f7 = function () {
    var a7 = 20;
    var g7 = function () {
        console.log(a7);
    }
    return g7;
}

var callf7 = f7();
callf7();//method1 callig g7
f7()();//method2 callig g7

var callf7_ = new f7();
callf7_();//method3
new f7()();//method4
//callf7_.g7();  //this error


console.log("===========nested function ====calling with ()()============");
sum8 = function (a) {
    return function (b) { // takes a from outer LexicalEnvironment
        return a + b
    }
};

console.log(sum8(10)(5));//two ()() because , first () will return the function, and 2nd () will execute the function


console.log("============object and methods==============");

/*
 When you put a function into an object, you can call it as method:
 */

var user10 = {
    name: "Guest",
    askName: function (myName) {
        this.name = myName;
    },
    sayHi: function () {
        console.log('Hi, my name is ' + this.name);
    }
}
user10.askName('jack');
user10.sayHi();
