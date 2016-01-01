/*Summary

 The object is fully described by it’s constructor.
 Inheritance is done by calling the parent constructor in the context of current object.
 All local variables/functions become private, all assigned to this become public.
 Local functions are usually bound to the object.
 Protected properties can be prepended with underscore '_', but their protection can’t be forced on
 language level.
 Overriding is done as replacing the property in this. The old property may be copied and reused.

 */


console.log("===========The object is declared solely by it’s constructor=============");
//Function Declaration
function Animal(name) {
    this.name = name;
    this.run = function () {
        console.log("in Animal run=" + this.name);
    };
}

var animal = new Animal('cat');
animal.run();//in run=cat

//Annonymous function Expressions
var Animal2 = function (name) {
    this.name = name;
    this.run = function () {
        console.log("in Animal run=" + this.name);
    };
}

var animal2 = new Animal2('cat');
animal2.run();//in run=cat


console.log("============inheritance==============");
//Function Declaration
function Rabbit(name) {
    Animal.apply(this, arguments);
    // Animal.apply(this, name); // or use

    this.bounce = function () {
        console.log("in Rabbit bounce=" + this.name);
    };
}

var rabbit = new Rabbit('smallBunny');
rabbit.bounce();//in bounce=smallBunny
rabbit.run();//in run=smallBunny

//Annonyms Function Expression
var Rabbit2 =function(name) {
    Animal2.apply(this, arguments);

    this.bounce = function () {
        console.log("in Rabbit bounce=" + this.name);
    };
}

var rabbit2 = new Rabbit2('smallBunny');
rabbit2.bounce();//in bounce=smallBunny
rabbit2.run();//in run=smallBunny


console.log("===========Overriding (polymorphism)=================");
function Rabbit3(){
    Animal.apply(this, arguments);//or Animal.apply(this, name);
    var parentrun = this.run;//keep the parent run

    this.run= function () {
        parentrun.apply(this); //no need to pass arguments as animal.run() do not take any arguments
        console.log("in Rabbit3.run="+this.name);
    };
}

var rabbit3 = new Rabbit3("bigBunny");
rabbit3.run();//this will call child.run and parent.run


console.log("==============good summary about variables=================");
var x = "Global scope";
var y = "Not changed.";

function Foo() {
    this.x = "Attribute of foo";  //ATTRIBUTE OF OBJECT FOO
    var x = "In foo's closure";  //PRIVATE
    y = "Changed!"   //GLOBAL
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


console.log("==========Private/protected methods (encapsulation)=================");

function Rabbit4(){
    /*Declared variables are constrained in the execution context in which they are declared.
     Undeclared variables are always global.*/

    x4=10;//public
    this.y4=20;//public

    var z4=30;//private

}

var rabbit4= new Rabbit4();
console.log(rabbit4.x4);
console.log(rabbit4.y4);
console.log(rabbit4.z4);
console.log(x4);
//console.log(y4);
//console.log(z4);


console.log("=============inherited properties====1========");
function Animal5() {
    var prop = 1
}
function Rabbit5() {
    Animal5.call(this) // inherit
    /* can't access prop from here */
   // console.log(prop);
}

var rabbit5= new Rabbit5();


console.log("=============inherited properties====2========");
function Animal6() {
    this._prop = 'test'  // protected
}
function Rabbit6() {
    Animal6.apply(this) // inherit
    console.log(this._prop) // access
}
var rabbit6 = new Rabbit6();