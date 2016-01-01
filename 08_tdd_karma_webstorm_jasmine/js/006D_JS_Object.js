//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


/*The Object.keys() method returns an array of a given object's own enumerable properties, 
in the same order as that provided by a for...in loop (the difference being that a for-in loop 
enumerates properties in the prototype chain as well).
 Syntax

 Object.keys(obj)
 
 */
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']

var emp = {
 name: "siddy",
 add: "london",
 age: 40
};

console.log(Object.keys(emp));


console.log("==================for in loop=================");
var emp2 = {
 name: "siddy",
 add: "london",
 age: 40
};

console.log(Object.keys(emp));

for(var item in emp2) {
 console.log(item);
 console.log(emp2[item]);
}