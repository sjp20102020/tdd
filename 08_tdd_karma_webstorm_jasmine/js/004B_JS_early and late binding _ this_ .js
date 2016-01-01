/*
 http://javascript.info/tutorial/binding   best1
 * http://alistapart.com/article/getoutbindingsituations best2
 * http://spin.atomicobject.com/2014/10/20/javascript-scope-closures/ best3
 *
 *
 *
 *
 In JavaScript, binding is always explicit, and can easily be lost, so a method using this
 will not refer to the proper object in all situations, unless you force it to.
 Overall, binding in JavaScript is not a difficult concept, but it is far too often ignored or
 glossed over by JavaScripters, which leads to confusion.


 Takeaway points
================
 To recap:

 Any member access must be qualified with the object it pertains to, even when it is this.
 Any sort of function reference (assigning as a value, passing as an argument) loses the function’s original binding.
 JavaScript provides two equivalent ways of explicitly specifying a function’s binding when calling it: apply and call.
 Creating a “bound method reference” requires an anonymous wrapper function, and a calling cost. In specific situations, leveraging closures may be a better alternative.



 *
 * */


console.log("======example 1==============");
/*

* */
name = "alex"; //or name="alex";
var example1 = {
    name: 'John',
    greet: function (person) {
        console.log("Hi " + person + ", my name is " + name);//name= alex. (name is window.name)
        console.log("Hi " + person + ", my name is " + this.name); //name=John (This is explicit binding)
    }
};
example1.greet("Mark");


console.log("======example 2==============");
/*
 refrenceGreet is a reference to example.greet; But example1.greet("Mark") is calling the owner directly.

 When we call a method via reference, the method looses implicit binding.
 and 'this' stops referencing its owner object and goes back to its default value, which in this case is window
* */
name = "alex"; //or name="alex";
var example1 = {
    name: 'John',
    greet: function (person) {
        console.log("Hi " + person + ", my name is " + name);//name= alex.
        console.log("Hi " + person + ", my name is " + this.name); //name=alex
    }
};
var refrenceGreet = example1.greet;
refrenceGreet("Mark");


console.log("=============example 3=================");
var Person = function(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
}
Person.prototype = {
    getFullName: function() {
        console.log(this.first + ' ' + this.last);
    },
    greet: function(other) {
        console.log("Hi " + other.first + ", I'm " +  this.first + ".");
    }
};

var elodie = new Person('Elodie', 'Jaubert', 27);
var christophe = new Person('Christophe' , 'Porteneuve', 30);
christophe.greet(elodie);//Hi Elodie, I'm Christophe.  ALL GOOD

var refGreet = christophe.greet;
refGreet(elodie);//Hi Elodie, I'm undefined.   //BAD... REFERENCE calls looses implicit binding.

/*
* Below, We lost our binding when we passed greet and getFullName as arguments,
* so their this reference points to the window object
* */
var times =function(n, fx, arg) {
    for (var index = 0; index < n; ++index) {
        fx(arg);
    }
};

times(3, christophe.greet, elodie);//3 times--> Hi Elodie, I'm undefined.  //BAD
times(1, elodie.getFullName);//undefined undefined   //BAD

console.log("==================example 4 ====Binding explicitly====use apply or call=====");
name = "alex"; //or name="alex";
var example4 = {
    name: 'John',
    greet: function (person) {
        console.log("Hi " + person + ", my name is " + name);//name= alex.
        console.log("Hi " + person + ", my name is " + this.name); //name=alex
    }
};
var refrenceGreet4 = example4.greet;
refrenceGreet4("Mark");
refrenceGreet4.apply(example4, ["Mark"]);
refrenceGreet4.call(example4, "Mark");


console.log("==============example 5 ====binding explicitly====use apply or call===");
var Person5 = function(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
}
Person5.prototype = {
    getFullName: function() {
        console.log(this.first + ' ' + this.last);
    },
    greet: function(other) {
        console.log("Hi " + other.first + ", I'm " +  this.first + ".");
    }
};

var elodie5 = new Person('Elodie', 'Jaubert', 27);
var christophe5 = new Person('Christophe' , 'Porteneuve', 30);

var refGreet = christophe5.greet;
refGreet(elodie5);//Hi Elodie, I'm undefined.   //BAD... REFERENCE calls looses implicit binding.
refGreet.apply(christophe5, [elodie5]);
refGreet.call(christophe5, elodie5);


console.log("=================example 6 ===========using a wrapper=======");
/*
* So what we want is a way to persistently bind a method, so that we get a bound method reference,
* so to speak. The only way to achieve this requires us to wrap our original method in another one,
* that will perform the apply call.
* */
var Person6 = function(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
}
Person6.prototype = {
    getFullName: function() {
        console.log(this.first + ' ' + this.last);
    },
    greet: function(other) {
        console.log("Hi " + other.first + ", I'm " +  this.first + ".");
    }
};

var elodie6 = new Person('Elodie', 'Jaubert', 27);
var christophe6 = new Person('Christophe' , 'Porteneuve', 30);

/*
* wrapper...
* */
createBoundedWrapper =function (object, method) {
    return function() {
        return method.apply(object, arguments);
    };
}
var refGreet6 = christophe6.greet;
refGreet6(elodie6);//Hi Elodie, I'm undefined.   //BAD... REFERENCE calls looses implicit binding.

var refGreet6_ = createBoundedWrapper(christophe6, christophe6.greet);
refGreet6_(elodie6);

console.log("==============example 7 ===using “lexical closure.” ==========");
var Person7 = function(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
}
Person7.prototype = {
    self : this,
    getFullName: function() {
        //console.log(this.first + ' ' + this.last);
        console.log(self.first + ' ' + self.last);
    },
    greet: function(other) {
        //console.log("Hi " + other.first + ", I'm " +  this.first + ".");
        console.log("Hi " + other.first + ", I'm " +  self.first + ".");
    }
};

var elodie7 = new Person('Elodie', 'Jaubert', 27);
var christophe7 = new Person('Christophe' , 'Porteneuve', 30);

var refGreet7 = christophe7.greet;
refGreet7(elodie7);//Hi Elodie, I'm undefined.   //BAD... REFERENCE calls looses implicit binding.


/*
* http://spin.atomicobject.com/2014/10/20/javascript-scope-closures/
* More about Lexical closures
* */