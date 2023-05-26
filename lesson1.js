console.log("Hello World");

// For running through terminal/CMD: $ node filename.js

// comments are same as cpp
// in line comment
/* this is
a
multi line comment
*/

// The 7 Data types in js:
var one; // undefined
console.log(typeof one);
var two = null; // null
console.log(typeof two); // typeof of a null will be an object
var three = "King of the North"; // string
console.log(typeof three);
var four = 1455 // numbers
console.log(typeof four); // both int & float type are number
var five = Symbol("this is a symbol"); // symbol
console.log(typeof five);
var six = true; // boolean
console.log(typeof six);
var seven = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; // object
console.log(typeof seven); //objects are key value pairs in javascript like dictionaries in python & maps in cpp

// Declaring Variables:
var name1 = "Haider"; // can be changed
let name2 = "jon"; // can only be used in the scope of the variable
const pi = 3.14; // value cannot be changed
// we can change the value existing indexes of const decleared arrays
// by convension variable names will always start with lowercase

console.log("Mathematical Operations:");
/* All same as usual
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
+=	Increment
-=	Decrement
*/

console.log("Comparision Operators:");
/*
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator

Usage of a ternary operator:
without using the ternary operator "?":
var num = 4, msg = "";
if (num === 4) {
  msg = "Correct!";
}
else {
  msg = "Incorrect!";
}
console.log(msg) -> "Correct!"
by using the ternary operator "?":
var num = 4, msg = "";
msg = (num === 4) ? "Correct!" : "Incorrect!";
console.log(msg) -> "Correct!"
*/

console.log("Logical Operators:");
/*
&&	logical and
||	logical or
!	logical not
*/

// String Concatenation:
// string + string
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3);

let text4 = "What a very ";
text4 += "nice day";
console.log(text4);

// string + number
let rankstatus = "CC ";
let clonenumber = 2224;
let ctnumber = rankstatus + clonenumber;
console.log(ctnumber); // Clone Commander Cody
console.log("CT " + 275555); // ARC Trooper Fives

// Quotes in a string
var quote = "Master Yoda said, \"Do or Donot, there is not Try!\" ";
var quote = 'Master Yoda said, "Do or Donot, there is not Try!" ';
var quote = `'Master Yoda said, "Do or Donot, there is not Try!" '`;
console.log(quote);

var newquote = 'He said, "Hello there!"';
console.log(newquote);

// Multiline String
var multilinestring = "Hello There! \nmy name is general kenobi \n \t \\t makes a tab as seen <--"
console.log(multilinestring)
