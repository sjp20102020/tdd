function Rabbit(){
    console.log("in Rabit");
}
var rabbit = new Rabbit();

/*
BACKGROUND KNOWLEDGE
=====================
 A new function call sets the __proto__ of the object to the value of its prototype property.
 The code Rabbit.prototype = animal literally means the following:
 ”set __proto__ = animal for all objects created by new Rabbit”.
 */


/*
* The interpreter creates the new function object from your declaration.
* Together with the function, it’s prototype property is created and populated.

 This default value the prototype is an object with property constructor,
 which is set to the function itself. In our case, to Rabbit:
 Rabbit.prototype = { constructor: Rabbit }


 */
console.log(rabbit);
console.log("===about Rabbit=====");
console.log(Rabbit.constructor);
console.log(Rabbit.__proto__);
console.log(Rabbit.prototype);
console.log(Rabbit.prototype.hasOwnProperty('constructor'));//true
console.log(Rabbit.__proto__.hasOwnProperty('constructor'));//true
/*
Rabbit.prototype ={constructor: Rabbit}
* */

console.log("====about rabbit======");
console.log(rabbit.constructor);
console.log(rabbit.__proto__);
console.log(rabbit.prototype);
console.log(rabbit.hasOwnProperty('constructor'));//false
console.log(rabbit.__proto__.hasOwnProperty('constructor'));//true
/*
rabbit.__proto__ = {constructor: Rabbit}
* */


/*
* Summary
* http://javascript.info/tutorial/constructor
*

 The constructor property is created together with the function as a single property of func.prototype.
 When the prototype is replaced, the constructor is lost. The interpreter doesn’t keep it.
 If we want to have the right constructor after inheritance - we need to set it by our own.

 */