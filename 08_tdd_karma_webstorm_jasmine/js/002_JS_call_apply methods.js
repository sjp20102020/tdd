

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

