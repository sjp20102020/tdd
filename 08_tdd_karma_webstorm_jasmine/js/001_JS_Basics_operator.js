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


console.log("=================if condition evalustion rules ================");
/*
following will evaluate to false
false, undefined, null, o, NaN, empty string ("")

all other will be true.
* */

if(false)console.log("yes");else console.log("no");
if(undefined)console.log("yes");else console.log("no");
if(null)console.log("yes");else console.log("no");
if(NaN)console.log("yes");else console.log("no");
if("")console.log("yes");else console.log("no");
if(0)console.log("yes");else console.log("no");


if(true)console.log("yes");else console.log("no");
var myFun10 = function(){};
if(myFun10)console.log("yes");else console.log("no");
var myName ="sid";
if(myName)console.log("yes");else console.log("no");
if(1)console.log("yes");else console.log("no");

