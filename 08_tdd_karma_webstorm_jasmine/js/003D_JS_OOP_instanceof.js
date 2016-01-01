/*
 BACKGROUND KNOWLEDGE
 =====================
 A new function call sets the __proto__ of the object to the value of its prototype property.
 The code Rabbit.prototype = animal literally means the following:
 ”set __proto__ = animal for all objects created by new Rabbit”.
 */



/*Summary

 obj instanceof Func checks if the obj is a result of new Func.
 The check is performed by walking the __proto__ chain, so the inheritance is supported:


 var arr = []
 alert(arr instanceof Array) // true
 alert(arr instanceof Object) // true
 The instanceOf lies when an object comes from another window(or frame). The guaranteed-to-work replacement for native objects is checking <a href="/tutorial/type-detection">[Class]], see
 */


/*
* The logic behind obj instanceof F:

 Get obj.__proto__
 Compare obj.__proto__ against F.prototype
 If no match then set temporarily obj = obj.__proto__ and repeat step 2 until either match is found or the chain ends.


 */


function Rabbit() { }
var rabbit = new Rabbit
console.log(rabbit instanceof Rabbit) // true //rabbit.__proto__ == Rabbit.prototype.



/*
* Here, the match is found at rabbit.__proto__.__proto__ == Object.prototype.
* */
function Rabbit() { }
var rabbit = new Rabbit
console.log(rabbit instanceof Object) // true//Here, the match is found at rabbit.__proto__.__proto__ == Object.prototype.
