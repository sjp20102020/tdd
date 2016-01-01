"use strict"  //http://www.w3schools.com/js/js_strict.asp
/*
 http://javascript.info/tutorial/array
 * */
console.log("==========create array method1======[,,]========");
var arr1 = [];//empty array
console.log(arr1.length);//0

//int array
var arr2 = [10, 20, 30];
console.log(arr2.length);//3
console.log(arr2);//[ 10, 20, 30 ]
console.log(arr2[2]);//30 3rd element

var arr3 = ["apple", "orange"];
console.log(arr3.length);//2
console.log(arr3);//[ 'apple', 'orange' ]
console.log(arr3[2]);//undefined

var arr4 = [{name: "jack", add: "Lon"}, {sal: 2000, com: 300}];
console.log(arr4.length);//2
console.log(arr4);//[ { name: 'jack', add: 'Lon' }, { sal: 2000, com: 300 } ]
console.log(arr4[1]);//{ sal: 2000, com: 300 }


console.log("==============create Array method 2=====new Array=========");
var A2 = new Array(2, 5);
console.log(A2);
console.log(A2.length);
console.log(A2[0]);
console.log(A2[1]);

console.log("=============create empty array method2====new Array(size)..");

var A1 = new Array(3);//This create length 3 array. But do not restrict to 3.
console.log(A1.length);
A1[0] = 12;
A1[10] = 22;//extends the array from 3 to 11 elements.
console.log(A1);
console.log(A1.length);


console.log("=============2d Array==================");
var A3 = new Array(2);
A3[0] = new Array(2);
A3[1] = new Array(3);
console.log(A3);//[ [ ,  ], [ , ,  ] ]

console.log("===========push and pop=========");
/*Methods pop/push manipulate with the end of array,
 pop: remove from end of array
 push: add to end of array.

 *
 * */
var A4 = ["apple", "orange", "pears"];
console.log(A4);
A4.push("grapes");
console.log(A4);
console.log(A4.pop());
console.log(A4);

console.log("==========shift and unshift==============");
/*
 shift : remove the first element of Array
 unshift : add element to the front of array
 * */
var A5 = ["apple", "orange", "pears"];
console.log(A5);
console.log(A5.shift());
console.log(A5);
A5.unshift("mango");
console.log(A5);

console.log("=====iterate array==========");
/*
 * http://stackoverflow.com/questions/3010840/loop-through-array-in-javascript
 * */
var A6 = ["apple", "orange", "pears"];
//BAD WAY..SHOULD BE USED FOR OBJECT PROPERTY ITERATION ONLY
for (var x in A6) {
    console.log(A6[x]);
}

//GOOD
for (var i = 0; i < A6.length; i++) {
    console.log(A6[i]);

}

console.log("========iterate object property===OWN and INHERITED=======");
var obj7 = {
    x: "xxx",
    y: "yyy",
    z: "zzz"
};
obj7.__proto__ = {
    a: "aaa",
    b: "bbb"
};
for (var prop in obj7) {
    console.log("ALL==" + prop + "==" + obj7[prop]);
    if (obj7.hasOwnProperty(prop)) {
        console.log("own==" + prop + "==" + obj7[prop]);
    }
}


console.log("===========join and split============");
var A7 = ["apple", "orange", "pears"];
var mystr = A7.join(', ');
console.log(mystr);

var myValues = "apple, pears, bannana";
var A8 = myValues.split(',');
console.log(A8);

console.log("===========join and split======22======");
var currencies = ['USD', 'EUR', 'CNY'];
var YAHOO_FINANCE_URL_PATTERN =
    '//query.yahooapis.com/v1/public/yql?q=select * from '+
    'yahoo.finance.xchange where pair in ("PAIRS")&format=json&'+
    'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';
console.log('USD' + currencies.join('","USD'));
var url = YAHOO_FINANCE_URL_PATTERN.replace('PAIRS', 'USD' + currencies.join('","USD'));
console.log(url);

console.log("=======splice==================");
/*
 index starts from 0
 splice(start Element, NoOfElements to Remove, InsertElement1, InsertElement2, etc)
 * */
var A7 = ["apple", "orange", "pears", "jack"];
var removedArr = A7.splice(0, 2);//pears,jack   // start element=0, remove 2 elements
console.log(A7.join(','));
console.log("removedArr==" + removedArr);

A7 = ["apple", "orange", "pears", "jack"];
A7.splice(0, 1);
console.log(A7);//'orange', 'pears', 'jack'

A7 = ["apple", "orange", "pears", "jack"];
A7.splice(1, 1, "cherry");//delete and replace
console.log(A7);//'apple', 'cherry', 'pears', 'jack'

A7 = ["apple", "orange", "pears", "jack"];
A7.splice(1, 0, "cherry");//insert only
console.log(A7);//'apple', 'cherry', 'orange', 'pears', 'jack'

A7 = ["apple", "orange", "pears", "jack"];
A7.splice(-2, 1);//delete 2 element from back. (back starts with -1. not 0)
console.log(A7);//'apple', 'orange', 'jack'


A7 = ["apple", "orange", "pears", "jack"];
A7.splice(-2, 1, "nectarin");//delete 2 element from back. (back starts with -1. not 0)
console.log(A7);//'apple', 'orange', 'nectarin', 'jack'


console.log("============slice================");
/*
 slice(startElement, endElement-excluding)
 * */
var A8 = ["apple", "orange", "pears", "jack"];
var A8slice = A8.slice(1);//take all elements starting from elem 1
console.log(A8);
console.log(A8slice);//'orange', 'pears', 'jack'

A8 = ["apple", "orange", "pears", "jack"];
A8slice = A8.slice(3, 1);//BAD ...start=3 and end=1(should be always >3)
console.log(A8);
console.log(A8slice);//[]

A8 = ["apple", "orange", "pears", "jack"];
A8slice = A8.slice(2, 3);//start 2, end=3-1
console.log(A8);
console.log(A8slice);//pears

console.log("===========reverse==============");
var A9 = ["apple", "orange", "pears", "jack"];
console.log(A9.reverse());// 'jack', 'pears', 'orange', 'apple'

var aStr9 = "www.gavjtech.com";
console.log(aStr9.split('.').reverse());
console.log(aStr9.split('.').reverse()[0]);

console.log("=======sort=============");
var A10 = [1, 15, 2];
console.log(A10.sort());

function compare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

console.log(A10.sort(compare));


console.log("=============map======1===============");
//http://stackoverflow.com/questions/17367889/array-map-concept
/*map loops through your original array and calls the method for each value in the array.
 It collects the results of your function to create a new array with the results
 * */
var A11 = ["apple", "orange", "pears", "jack"];
var A11Transformed = function () {
    return A9.map(function (elm) {
        return elm + ' hii';
    });
}
console.log(A11Transformed());


console.log("=============map======2===============");

function square(x) {
    return x * x;
}

var A12 = [2, 3, 4];
var A12_ = A12.map(square);
console.log(A12_.join(','));

console.log("====================reduce method========================");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

var total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
});
// total == 6
console.log(total);//

console.log("====================reduce method=======2=================");
var total2= [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
})
console.log(total2);