var fn1 = function(p1, p2, p3){
    console.log(this);
    console.log(arguments);
    console.log(p1);
    console.log(p2);
    console.log(p3);
};

var emp ={name: 'sid', add:'lon'};
fn1(emp,2,'abc', true);
console.log("=================");
fn1.call(emp, [2,'abc',true]);