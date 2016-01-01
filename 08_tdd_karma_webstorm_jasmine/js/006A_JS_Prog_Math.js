console.log(1/0);//infinity
console.log(0/0);//NaN

var n=0/0;
console.log(isNaN(n));//true
console.log(isNaN("hi"));//true
console.log(isNaN(" "));//false //BAD //string with white spaces

console.log("===best method to check a number==============");
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

console.log(isNumeric(233));//true
console.log(isNumeric(" "));//false
console.log(isNumeric("242"));//true
console.log(isNumeric(1/0));//false

console.log("=========the + sign for strict conversion=========");
/*Actually, all mathematical functions excepts binary plus '+' convert a string to number:*/
console.log( "  232.23");//leave as a string
console.log(+ "  232.23"); //converts to a number

console.log("=======parseInt  parseFloat=============");
console.log(parseInt("2424.24"));//2424
console.log(parseInt("02424.84",10));//2424  //second parameter is the base..radix
console.log(parseFloat("2424.84"));//2424
console.log(parseFloat("0x2424.84"));//2424

console.log("===========rounding============");
/*
 Math.floor: Rounds down
 Math.ceil Rounds up
 Math.round: Rounds to nearest
 toFixed: rounds to nearest decimal places
 */

console.log(Math.round(2323.632323));//2324
console.log(Math.round(2323.432323));//2323
console.log(Math.ceil(2323.632323));//2324
console.log(Math.ceil(2323.432323));//2324
console.log(Math.floor(2323.632323));//2323
console.log(Math.floor(2323.432323));//2323

console.log(323.32223.toFixed(2));//323.32
console.log(323.32623.toFixed(2));//323.33

console.log("===============math.random==============");
console.log(Math.random());
console.log(Math.random().toFixed(4));
