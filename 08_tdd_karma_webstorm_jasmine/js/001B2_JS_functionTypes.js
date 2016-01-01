////http://stackoverflow.com/questions/6843951/which-way-is-best-for-creating-an-object-in-javascript-is-var-necessary-befor
/*There is various way to define a function. It is totally based upon your requirement. Below are the few styles :-

 Object Constructor
 Literal constructor
 Function Based
 Protoype Based
 Function and Prototype Based
 Singleton Based
 */

//1 Object constructor
var person = new Object();

person.name = "Anand",
    person.getName = function () {
        return this.name;
    };


//2 Literal constructor
var person = {
    name: "Anand",
    getName: function () {
        return this.name
    }
}

//3 function Constructor
function Person(name) {
    this.name = name
    this.getName = function () {
        return this.name
    }
}

//4 Prototype
function Person() {
};
Person.prototype.name = "Anand";

//5Function/Prototype combination
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name
}

//6 Singleton
var person = new function () {
    this.name = "Anand"
}