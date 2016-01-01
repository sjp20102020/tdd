
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

