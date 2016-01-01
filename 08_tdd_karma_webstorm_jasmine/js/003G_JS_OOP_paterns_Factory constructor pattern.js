/*
* http://javascript.info/tutorial/factory-constructor-pattern
*
* Summary

 The factory constructor uses a function which creates an object on it’s own without new.
 Inheritance is done by creating a parent object first, and then modifying it.
 Local methods and functions are private. The object must be stored in closure prior
 to returning if we want to access it’s public methods from local ones.


 * */
console.log("================declaration=================");
function Animal(name) {
    var x="xx";
    this.y = "yy";
    z = "zz";
    return {
        color:  'red',
        run: function(){
            console.log("in Animal Run=" + name);

        },
        sleep: function () {
            console.log("in Animal sleep="+this.color);
        },
        other: function () {
            console.log("in Animal other="+x);//OK  this is a closure
            console.log("in Animal other="+y);//OK
            console.log("in Animal other="+z);//OK
        }

    };

}

var animal = Animal('Tiger');
console.log(animal);
animal.run();
animal.sleep();
animal.other();

console.log("=============inheritance========================");
/*Rabbit is made by creating an Animal, and then mutating it:
* */
function Rabbit2(name) {
    var rabbit = Animal(name);//make animal object

    rabbit.bounce = function () {
        this.run();
        console.log("in Rabbit2==" + name);
    };
    return rabbit;

}

var rabbit2 = Rabbit2('bunnyrabbit');
rabbit2.bounce();
rabbit2.sleep();


console.log("=============Private/protected methods (encapsulation)========1==========");
function Bird(name) {
    var speed = 100;
    function openWings() {
        console.log("In Bird..OpenWings");
        //fly();  //BAD ...openwings
        /*A private method like openWings can’t reference this.
        There’s no reference to the new object in a local function
        * */
    }
    return {
        fly: function () {
            console.log("in Bird..Objects..fly");
            openWings();
            this.move();
        },
        move: function () {
            console.log("in Bird..objects...move");
        }
    }

}

var bird = Bird('Parrot');
bird.fly();


console.log("=============Private/protected methods (encapsulation)========2=====solution--local can access the return object=====");
/*One way to solve that is to bind the new object to a local variable prior to returning:
* */
function Bird2(name) {
    var speed = 100;
    function openWings() {
        console.log("In Bird..OpenWings");
        self.fly();  //BAD ...openwings
        /*A private method like openWings can’t reference this.
         There’s no reference to the new object in a local function
         * */
    }
    var self= {
        fly: function () {
            console.log("in Bird..Objects..fly");
            //openWings(); //BAD ...cicular dependency
            this.move();
        },

        move: function () {

            console.log("in Bird..objects...move");
        },
    }
    return self;

}

var bird2= Bird2('Parrot');
bird2.fly();