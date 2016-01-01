console.log("=========Rule1======declared and undeclared variables=========");
//RULE1
/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

 Declared variables are constrained in the execution context in which they are declared.
 Undeclared variables are always global.
 * */
function ex1() {
    ex1y = 1;  //PUBLIC..Because undeclared // Throws a ReferenceError in strict mode
    var ex1z = 2;  //LOCAL
}

ex1();

console.log(ex1y); // logs "1"
//console.log(ex1z); // Throws a ReferenceError: z is not defined outside x


console.log("===========Implicit globals and outer function scope=================");


var x = 0;  // x is declared global, then assigned a value of 0
function a() { // when a is called,
    var y = 2;   // y is declared local to function a, then assigned a value of 2
    console.log(x, y);   // 0 2

    function b() {       // when b is called
        x = 3;  // assigns 3 to existing global x, doesn't create a new global var
        y = 4;  // assigns 4 to existing outer y, doesn't create a new global var
        z = 5;  // creates a new global variable z and assigns a value of 5.
    }         // (Throws a ReferenceError in strict mode.)

    b();     // calling b creates z as a global variable
    console.log(x, y, z);  // 3 4 5
}

a();                   // calling a also calls b
console.log(x, z);     // 3 5
console.log(typeof y); // undefined as y is local to function a


console.log("===========hoisting==================");
/*var hoisting

 Because variable declarations (and declarations in general) are processed before any code is executed,
 declaring a variable anywhere in the code is equivalent to declaring it at the top.
 This also means that a variable can appear to be used before it's declared.
 This behavior is called "hoisting", as it appears that the variable declaration is moved to the
 top of the function or global code.
 */

//block1 (is same as block2)
myAge1 = 2//hoisting
var myAge1;
console.log(myAge1);
// ...

// is implicitly understood as:

//block2
var myAge2;
myAge2 = 2;
console.log(myAge2);


console.log("==============good summary about variables=================");
var x = "Global scope";
var y = "Not changed.";

function Foo() {
    this.x = "Attribute of foo";
    var x = "In foo's closure";
    y = "Changed!"
    this.getX = function () {
        return x;//this will return the closure
        //return this.x;    // will return the attribute of foo
    }
}


console.log(x); // "Global scope"
console.log(y); // "Not changed"
foo = new Foo();
console.log(y); // "Changed!"
console.log(foo.x); // "Attribute of foo"
console.log(x); // "Global scope"
console.log(foo.getX()); // "In foo's closure"


console.log("=================variable with _x_  used in angular injection=====1=======");
var mySevice=12;

function useMyService(mySevice) {
    mySevice= mySevice;
    console.log(mySevice);
}

function usageOfMyService() {
    console.log(mySevice);
}
var callUseMyService = useMyService(10);

usageOfMyService();

console.log("=================variable with _x_  used in angular injection=====1=======");


var mySevice2=15;
function useMyService2(myService) {
    mySevice2= myService;
    console.log(mySevice2);
}

function usageOfMyService2() {
    console.log(mySevice2);
}

useMyService2(10);
usageOfMyService2();
