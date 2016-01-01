/*
* http://www.javascriptkit.com/javatutors/redev3.shtml
* http://www.w3schools.com/jsref/jsref_obj_regexp.asp
* */
console.log("=====using string search match replace=============");
/* method str.search returns the position of a regexp
* */

/*
regex = /siddy/gi    // /g to match all occurances  /i to be case insensitive
*
* */
var str = "hi siddy how are you doing siddy but siddy"
var regex = /siddy/
console.log(str.search(regex));


regex = /siddy/
str = "Show me siddy the pattern!"
console.log( str.search(regex) ) // 13

console.log("=====string.match=================");
regex = /siddy/g   //    /g this will show all occurances
str = "Show me siddy the pattern. this siddy again"
console.log( str.match(regex) ) // 13
console.log( str.search(regex) ) // 13



console.log("=====regex for email==============");
regex = /[a-z0-9!$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)/g
str = "hi my email is sjpsimpson@yahoo.com, but what is yours. mine is crsimpson@yahoo.com. But it might change";
console.log(str.match(regex));
console.log(str.search(regex));


console.log("=============string.replace================");
regex = /siddy/gi    // /g to match all occurances  /i to be case insensitive
str = "Show me Siddy the pattern. But iddy can be very busy!"
console.log(str.search(regex, "Peter"));
str=str.replace(regex, "Peter");
console.log(str);

console.log("============regex basics=============");

str = "Show me siddy the 34 pattern iddy and sid . but sample !"
//[abc] 	Find any character between the brackets
console.log( str.match(/[sidt]/g) ) // [ 's', 'i', 'd', 'd', 't', 't', 't' ]
 //   [^abc] 	Find any character NOT between the brackets
console.log(str.match(/[^sidt]/gi)); //
//[0-9] 	Find any digit between the brackets
console.log(str.match(/[0-9]/gi)); // [ '3', '4' ]
//[^0-9] 	Find any digit NOT between the brackets
console.log(str.match(/[^0-9]/gi));
//(x|y|z) 	Find any of the alternatives specified
console.log(str.match(/([ab]|sid[0-9])/g)); //will look for a match for a any (ex|ex|ex)
//. 	Find a single character, except newline or line terminator
console.log(str.match(/./g));
//\w 	Find a word character
console.log(str.match(/\w/g));
//\d 	Find a digit
console.log(str.match(/\d/g));
//\s 	Find a whitespace character
console.log(str.match(/\s/g));

console.log("=============Quantifiers==========");
//n{X} 	Matches any string that contains a sequence of X n's
console.log(str.match(/\d{2}/g)); //2 consecutive digits
//n+ 	Matches any string that contains at least one n
console.log(str.match(/\d+/g));


//n* 	Matches any string that contains zero or more occurrences of n
//only the last digit is optional
var str2 = "10 100 1000 10000 ";
console.log(str2.match(/100*/g));//[ '10', '100', '1000', '10000' ]
console.log(str2.match(/10000*/g));//[ '1000', '10000' ]






/*Metacharacters
 http://www.w3schools.com/jsref/jsref_obj_regexp.asp

 Metacharacters are characters with a special meaning:
 Metacharacter 	Description
 . 	Find a single character, except newline or line terminator
 \w 	Find a word character
 \W 	Find a non-word character
 \d 	Find a digit
 \D 	Find a non-digit character
 \s 	Find a whitespace character
 \S 	Find a non-whitespace character
 \b 	Find a match at the beginning/end of a word
 \B 	Find a match not at the beginning/end of a word
 \0 	Find a NUL character
 \n 	Find a new line character
 \f 	Find a form feed character
 \r 	Find a carriage return character
 \t 	Find a tab character
 \v 	Find a vertical tab character
 \xxx 	Find the character specified by an octal number xxx
 \xdd 	Find the character specified by a hexadecimal number dd
 \uxxxx 	Find the Unicode character specified by a hexadecimal number xxxx
 */



/*Quantifier 	Description
 n+ 	Matches any string that contains at least one n
 n* 	Matches any string that contains zero or more occurrences of n
 n? 	Matches any string that contains zero or one occurrences of n
 n{X} 	Matches any string that contains a sequence of X n's
 n{X,Y} 	Matches any string that contains a sequence of X to Y n's
 n{X,} 	Matches any string that contains a sequence of at least X n's
 n$ 	Matches any string with n at the end of it
 ^n 	Matches any string with n at the beginning of it
 ?=n 	Matches any string that is followed by a specific string n
 ?!n 	Matches any string that is not followed by a specific string n
 */