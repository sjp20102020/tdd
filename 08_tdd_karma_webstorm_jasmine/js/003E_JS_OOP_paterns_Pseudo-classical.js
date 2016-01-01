/*A pseudo-class consists of the constructor function and methods.
 * */


/*Solution

 Let’s get into details what happens in speedy.found("apple"):

 The interpreter searches found in speedy. But speedy is an empty object, so it fails.
 The interpreter goes to speedy.__proto__ (==Hamster.prototype) and luckily gets found and runs it.
 At the pre-execution stage, this is set to speedy object, because of dot-syntax: speedy.found.
 this.food is not found in speedy, but is found in speedy.__proto__.
 The “apple” is appended to speedy.__proto__.food.

 Hamsters share the same belly! Or, in terms of JavaScript, the food is modified in __proto__, which is shared between all hamster objects.

 Note that if there were a simple assignment in found(), like this.food = something,
 then step 4-5 would not lookup food anywhere, but assign something to this.food directly.
 */

console.log("=======Pseudo-classical pattern====================");
function Hamster() {
};
Hamster.prototype = {
    food: [], //food[] becomes shared
    ate :'', //this becomes local..not sure how???
    found: function (something) {
        this.food.push(something);
        this.ate = something;
    }
};

//create 2 Hamsters.
speedy = new Hamster();
lazy = new Hamster();

//feed the speedy
speedy.found('apple');
speedy.found('orange');
lazy.found('mango');

console.log(speedy.food.length);//2  //GOOD
console.log(lazy.food.length);//2 ...BAS??

console.log(speedy.ate);
console.log(lazy.ate);
console.log(speedy.ate);
console.log(lazy.ate);


console.log("===========solutin1=============");
/* function Hamster2() {
    this.food =[]
};*/

var Hamster2 = function(){
    this.food =[]
}

Hamster2.prototype = {
    ate :'', //this becomes local..not sure how???
    found: function (something) {
        this.food.push(something);
        this.ate = something;
    }
};

//create 2 Hamsters.
speedy2 = new Hamster2();
lazy2 = new Hamster2();

//feed the speedy
speedy2.found('apple');
speedy2.found('orange');
lazy2.found('mango');

console.log(speedy2.food.length);//2  //GOOD
console.log(lazy2.food.length);//2 ...BAS??

console.log(speedy2.ate);
console.log(lazy2.ate);
console.log(speedy2.ate);
console.log(lazy2.ate);


console.log("=================inheritance=====================");
/*To inherit from Animal, we need Rabbit.prototype.__proto__ == Animal.prototype.
This is a very natural requirement, because if a method is not find in Rabbit.prototype,
it should be searched in the parental method store, which is Animal.prototype.


 To implement the chain, we need to create initial Rabbit.prototype
 as an empty object inheriting from Animal.prototype and then add methods.


* */

function inherit(proto){
    function F(){};
    F.prototype = proto;
    return new F;

}
// Animal
function Animal(name) {
    this.name = name
}
// Animal methods
Animal.prototype = {
        canWalk: true,
sit: function() {
    this.canWalk = false
    console.log(this.name + ' sits down.')
}
}
// Rabbit
function Rabbit(name) {
    this.name = name
}
// inherit
Rabbit.prototype = inherit(Animal.prototype)
// Rabbit methods
Rabbit.prototype.jump = function() {
    this.canWalk = true
    console.log(this.name + ' jumps!')
}
// Usage
var rabbit = new Rabbit('Sniffer')
rabbit.sit()   // Sniffer sits.
rabbit.jump()  // Sniffer jumps!

console.log("=============Calling superclass constructor==============");
// Animal2
function Animal2(name) {
    this.name = name
}

function Rabbit2(name) {
    Animal.apply(this, arguments);//applying the Animal function to current object:
    //That executes Animal constructor in context of the current object, so it sets the name in the instance.
    this.name = name;
}


console.log("================Overriding a method (polymorphism)===============");
//To override a parent method, replace it in the prototype of the child:

    Rabbit2.prototype.sit = function() {
        alert(this.name + ' sits in a rabbity way.')
    }

console.log("=============Calling a parent method after overriding=============");
/*All parent methods are called with apply/call to pass current object as this.
A simple call Animal.prototype.sit() would use Animal.prototype as this.
* */
Rabbit.prototype.sit = function() {
    console.log('calling superclass sit:');
    Animal.prototype.sit.apply(this, arguments);
}


