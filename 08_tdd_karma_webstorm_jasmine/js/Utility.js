var CoreModule = function () {
    this.add = function (val1, val2) {
        return val1 + val2;


    };
}
//this.basicCompare = function () {

//http://stackoverflow.com/questions/16259711/how-can-i-override-console-log-and-append-a-word-at-the-beginning-of-the-outpu
/*
 var oldConsole= console.log;
 console.log = function (data) {
 Array.prototype.unshift.call(arguments,arguments.toString()+ "console.log(");
 oldConsole.apply(this, arguments);

 };
 */


/*function log(){
 if(console){
 // console.log.apply(console, arguments);
 console.log(args.join(''));
 }
 }*/


console.log("===============equal operator=== and strict equal operator===========");
console.log(9 == '9');
console.log('9' == 9);
console.log('9' === 9);
console.log(9 === '9');
console.log('9' === '9');
console.log('9' === "9");


console.log('======2========');
console.log('' == '');
console.log('' === '');
console.log('' == 0);
console.log(0 == '');
console.log(0 == false);
console.log(1 == true);
console.log(true == 1);

console.log('======3========');


console.log('======checking a Valid date========');

var d1 = new Date();
console.log(d1);

var d1 = new Date("foo");
console.log(d1.valid);

var d1 = new Date("2015-01-02 15:30:24");
console.log(d1);

console.log(d1.getTime());
console.log(isNaN(d1.getTime()));

console.log(d1.valueOf());
console.log(isNaN(d1.valueOf()));

console.log(d1);


console.log(isNaN(d1));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
//http://stackoverflow.com/questions/3250379/what-is-the-call-function-doing-in-this-javascript-statement/3250415#3250415
console.log("===============Object.prototype.toString.call======best way to check the type of a object======");
console.log(Object.prototype.toString.call(true));//[object Boolean]
console.log(Object.prototype.toString.call(10));//[object Number]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call("sid"));//[object String]
console.log(Object.prototype.toString.call({}));//[object Object]
console.log(Object.prototype.toString.call([5, 2]));//[object Array]
console.log(Object.prototype.toString.call(/a/));//[object RegExp]
console.log(Object.prototype.toString.call(new Date()));//[object Date]


console.log(Object.prototype.toString.call(Math));//[object Math]
var myVar;

console.log(Object.prototype.toString.call(myVar));//[object Undefined]
var myFunc = function () {
    console.log(typeof(new Date()));//[object Date]  --> object
};
console.log(Object.prototype.toString.call(myFunc));//[object Function]


console.log("===============typeof======returns object for Date, Array, null======");
console.log(typeof(true));//[object Boolean]   --> boolean
console.log(typeof(Boolean(true)));//[object Boolean]   --> boolean
console.log(typeof(10));//[object Number]    --> number
console.log(typeof(null));//[object Null]    --> object
console.log(typeof("sid"));//[object String]   -->string
console.log(typeof({}));//[object Object]   -->object
console.log(typeof([5, 2]));//[object Array] -->object
console.log(typeof(/a/));//[object RegExp]  -->object
console.log(typeof(myVar));//[object Undefined]  -->undefined
console.log(typeof(Math));//[object Math]

var myVar;
var myFunc = function () {
    console.log((new Date()) instanceof Date);//true
};
console.log(typeof(myFunc));//[object Function]   -->function

/*more typeof examples*/

console.log(typeof(z2)); //undefined

var x;
console.log(typeof(x));//undefined

var y = 10;
console.log(typeof(y));//number

var z = null;
console.log(typeof(z));//object

var z = {};
console.log(typeof(z));//object

var z = true;
console.log(typeof(z));//boolean

var z = Boolean(false);
console.log(typeof(z));//boolean

var z = "sid";
console.log(typeof(z));//string

var z = 'sid';
console.log(typeof(z));//string

var z = ' ';
console.log(typeof(z));//string


console.log("===============instanceof====fails in Multi Frame DOM Environments, ie: Multiple iFrames======");
console.log(([]) instanceof Array);//true
console.log(({}) instanceof Object);//true
console.log(("sid") instanceof Object);//false ?? do not now why
console.log((new Date()).constructor === Date);//true
console.log((6) instanceof Number);//false ?? do not now why

console.log("===============object's constructor property============");
console.log(([]).constructor === Array);//true
console.log((6).toString(2));                          // "110"


console.log(({}).constructor === Object);//true


var x = function () {
    return this;
};
console.log(x.call("hi"));


var alice = {
    firstName: 'Alice',
    lastName: 'Foo',
    getName: function () {
        firstName :'d';
        firstName = "df";
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(alice.getName());

var sidObj = {
    firstName: "sid",
    lastName: "simp"
}

console.log(alice.getName.call(sidObj));


console.log("=============prototype.toString==============");


console.log(["foo", "bar"].toString());                // "foo,bar"
console.log(("meow").toString());                      // "meow"


//return "hi date";
console.log((function () {
    return 'x';
}).toString());      // "function (){return 'x';}"


console.log("=============override toString======================");
/*override Emp Object */
//http://blog.anselmbradford.com/2009/04/05/object-oriented-javascript-tip-overriding-tostring-for-readable-object-imprints/
var Emp = function (name, addr) {
    this.myName = name;
    this.myAddr = addr;
};
Emp.prototype.toString = function () {
    return this.myName + ',' + this.myAddr;
};
console.log((new Emp("Sid", "London 5")).toString()); //--> Sid,London 5

/*override the date*/
Date.prototype.toString = function () {
    return this.getTime();
};

console.log(new Date());
console.log((new Date()).toString());                // "[object Object]"

//console.log(x());


console.log("==============modifying the console.log============")
var mylog = (function () {
    return {
        log: function () {
            var args = Array.prototype.slice.call(arguments);
            console.log.apply(console, args);
        },
        warn: function () {
            var args = Array.prototype.slice.call(arguments);
            console.warn.apply(console, args);
        },
        error: function () {
            var args = Array.prototype.slice.call(arguments);
            console.error.apply(console, args);
        }
    }
}());

var name = "Alex";
var arr = [1, 2, 3];
var obj = {a: 1, b: 2, c: 3};
var hello = function (msg) {
    alert(msg);
};
mylog.log("Name: ", name);
//mylog.log("Window Debug: ", window);
//mylog.error("Something error happen");
//mylog.warn("Ahh... Warning", arr, obj);
//mylog.log("more parameter: ", arr, obj, hello);
mylog.log(9 === '9');


console.log("===============javascript apply and call=============");
//http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply
//http://hangar.runway7.net/javascript/difference-call-apply
/*
 diret Method call:  parameters are , (param1, param2, param3)
 apply: parameters are, (this scope, array of Parameters)  , ie: (this Object, [param1, param2, param3])
 call: parameters are , (this scope, param1, param2, param3)

 Note:
 Both apply and call can be called on functions
 Both apply and call run the context or scope of the first argument.
 apply takes and array as the 2nd argument. Perfect if we do not know the number of arguments that will be passed.
 call takes list of params as 2,3,4th, etc arguments. We should know the number of arguments before hand.



 * */

function calculate(val0, val1, val2, val3) {
    return getNumericValue(val0) + getNumericValue(val1) + getNumericValue(val2) + getNumericValue(val3);

}

function isNumeric(val) {
    return !isNaN(val) && isFinite(val);
}

function getNumericValue(val) {
    console.log(val);
    if (isNumeric(val))return val;
    else return 0;
}


console.log(calculate(this, 5, 5, 5, 10, 20));
console.log("===============");
console.log(calculate(this, 5));
console.log("===============");
console.log(calculate.call(this, 5, 6));
console.log("===============");
console.log(calculate.apply(this, [5, 6, 7]));


console.log("=================apply==============");
function callMe() {
    var s = "";

    s += "this value: " + this.x + ",";
    for (i in callMe.arguments) {
        console.log(i);
        s += "arguments: " + callMe.arguments[i] + ",";
    }
    return s;
}

var myObj = {
    x: 11,
    y: 22
}


console.log(callMe(10, 20));
console.log(callMe.apply(30, [40, 50, 60]));
console.log(callMe.call(30, 40, 50, 60));

console.log(callMe(myObj, 20));
console.log(callMe.apply(myObj, [40, 50, 60]));
console.log(callMe.call(myObj, 40, 50, 60));


console.log("==============call and apply best example=============");
var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var say = function (greeting) {
    return this.name + "," + greeting;
};

var update = function (name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
};

//Above say() and update() can be called by call() or apply().
console.log(say.call(person1, "Hi person1...via call"));
console.log(say.apply(person2, ["Hi person2...via apply"]));

//dispatch function has to call each method(call or update) but with unknown number of parameters. so use apply, not call.
var dispatch = function (person, method, args) {
    return method.apply(person, args);
};


console.log(dispatch(person1, say, ["Hi person1 ..via dispatch"]));
dispatch(person2, update, ["sid", 21, 6]);
console.log(person2);


//read http://www.howtocreate.co.uk/tutorials/javascript/objects
//good oop http://javascript.info/tutorial/object-oriented-programming
//reading first //http://www.javascriptkit.com/javatutors/oopjs.shtml


console.log("===========exception handling==============");
var myFun = function () {
    try {
        console.log("in try");
        var x = 10 / 0;
        console.log(x);
        throw "I did throw an error";
    } catch (e) {
        console.log("in catch", e);
    } finally {
        console.log("in finally");
    }

}

myFun();


console.log("============oop==== __proto__ ==============");

/*
When an object rabbit inherits from another object animal,
in JavaScript that means that there is a special property
rabbit.__proto__ = animal.
*/


/*
 animal object; we can define attributes using :.
 also we can define functions using :
 = operator is not useed here.
 * */


var animal = {
    eats: true,
    closeeyes: false,
    sleep: function () {
        this.closeeyes = true; //this. will work on the rabbit context and not on animal context.
    },
    getcloseeyes: function(){
        return this.closeeyes;
}
}
;
var rabbit = {jumps: true};
rabbit.__proto__ = animal;
console.log(rabbit.eats);
console.log(rabbit.jumps);

console.log(rabbit.closeeyes);//look up from prototype
rabbit.sleep();  // this.closeeyes will be run on rabbit and not on animal.
console.log(rabbit.closeeyes);//r
console.log(animal.closeeyes);

console.log(rabbit.getcloseeyes());
console.log(animal.getcloseeyes());

/*
 *
this.prop:::
===========
When a property is read, like this.prop, the interpreter looks it in the prototype.
When a property is assigned, like this.prop = value, then there is no reason to search. The property is written directly into the object (here this).
Same with delete obj.prop. It only deletes the property on object itself, and leave it intact if it is in the prototype.
*
* */




console.log("======================Object.getPrototypeof===================");
console.log(Object.getPrototypeOf(rabbit));
console.log(Object.getPrototypeOf(animal));

console.log("==============Any function creates a object when called with new ===================");
var sjpStudy = function(){
    console.log("in sjpStudy");
};

var sjpStudy01 = new sjpStudy();

console.log("==============using prototype property to set _proto_  =====================");
/*
 A new function call sets the __proto__ of the object to the value of its prototype property.
 The code Rabbit.prototype = animal literally means the following:
 ”set __proto__ = animal for all objects created by new Rabbit”.
 */

var Animal = {
    eats : true
};



var Rabbit = function(_name){
    this.name = _name;
};

Rabbit.prototype = Animal; // this will assign Rabbit._proto_ = Animal; only after the new keyword.
var rabbit = new Rabbit("white rabbitti");
console.log(rabbit.name);
console.log(rabbit.eats);

console.log("============Object.create(proto)======================");
/*
 The functionality of Object.create(proto) is great, because it allows to inherit directly from the given object.
 The result of inherit(animal) is identical to Object.create(animal): an new empty object, with object.__proto__ = animal.
* */



var inherit = function(proto){
    var F = function(){};
    F.prototype = proto;
    //return new F();
    return new F;  // F or F() does work.

}

var Animal = {
  eats : true
};

var Rabbit = inherit(Animal);
console.log(Rabbit.eats);

var animal2 = Object.create(Animal);
animal2.sleep = function(){console.log("I love to sleep")};
animal2.size = "big";
console.log(animal2.eats);
console.log(animal2.__proto__);
console.log(animal2);

console.log("====hasOwnProperty and ==looping through all properties====");
/*
hasOwnProperty = true if property belongs to current object only.
* */

var Cat = {
  eyes : true,
    nose : true,
    sound : "Meow",
    makeSound : function(){return this.sound;}
};

var BabyAnimal = {
    eats: true
};

Cat.__proto__ = BabyAnimal;

console.log(Cat.hasOwnProperty('eye'));//false
console.log(Cat.hasOwnProperty('eyes'));//true
console.log(Cat.hasOwnProperty('makeSound'));//true
//check the prototype values
console.log(Cat.hasOwnProperty('eats'));
console.log(Cat);
console.log(Cat.__proto__);

console.log("=====property iteration==========");
for(i in Cat){
    console.log(i , Cat[i]);
}


/*
 Summary
========
 //http://javascript.info/tutorial/inheritance#inheritance-the-proto
 The inheritance is implemented through a special property __proto__ (named [[Prototype]] in the specification).

 When a property is accessed, and the interpreter can’t find it in the object, it follows the __proto__ link and searches it there.
 The value of this for function properties is set to the object, not its prototype.
 Assignment obj.prop = val and deletion delete obj.prop

 Managing __proto__:

 Firefox/Chrome give direct access to obj.__proto__. Most recent browsers support read-only access with Object.getPrototypeOf(obj).
 An empty object with given prototype can be created by Object.create(proto) in most modern browsers, or the following function in all browsers:

 function inherit(proto) {
 function F() {}
 F.prototype = proto
 return new F
 }

 A constructor function sets __proto__ for objects it creates to the value of its prototype property.

 Additional methods:

 for..in loop lists properties in the object and its prototype chain.
 obj.hasOwnProperty(prop) returns true only if the prop belongs to obj, not its prototype.

* */

