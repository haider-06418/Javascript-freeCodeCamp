// Lesson 5: generating random numbers, string & binary to integer conversion, ternarary operator, rest operator, spread operator, destructuring assignment 

function print(input){
    console.log(input)
}

// Generating random numbers

// generates random number in the range; 0 <= x < 1
var rand1 = Math.random(); 

// generates random number in a specified range
let min = 1;
let max = 10;
let randomWholeNumber = Math.floor(Math.random() * (max - min + 1)) + min;

print(randomWholeNumber)


// String to Integer conversion 
var str = '66'
var int = parseInt(str)
print(int)

// binary string to int base 10 conversion
var strbinary = '1001010'
var int = parseInt(strbinary, 2) // base 2
print(int)

// Ternarary operator --> ?

// without using the ternary operator "?":
var num = 4, msg = "";
if (num === 4) {
  msg = "Correct!";
}
else {
  msg = "Incorrect!";
}
console.log(msg); // "Correct!"

// using the ternary operator "?":
var num = 4, msg = "";
msg = (num === 4) ? "Correct!" : "Incorrect!";
console.log(msg); // "Correct!"

// Syntax: condition ? if condition true : if condition false

// nested ternary operator 
function checksign(number){
    return number > 0 ? 'Positive': number < 0 ? 'Negative' : 'Zero';
}


// rest operator
// pass as many inputs as you want, it will convert all the inputs into a list named args

function sum(...args){
  return args.reduce((a, b) => a+b, 0);
}

print(sum(1, 2, 3, 4, 5));


// spread operator 
// copys the elements an existing array to a new array

var arr1 = [1, 2, 3, 4];
var arr2 = [...arr1];


// Destructuring assignment 

// destructuring object

// assigning values from an object to diff variables 
var colors = {'x':5, 'y':10, 'z':15};

// usual way:
var x = colors.x;
var y = colors.y;
var z = colors.z;

// new way;
var {x : a, y : b, z : c} = colors;
print(a);
print(b);
print(c);

// destructuring arrays
var arr = [1, 2, 3, 4, 5];
var [a, b, c, d, e] = arr;
print(a);
print(b);
print(c);

// rest operator with destructuring arrays 
var arr = [1, 2, 3, 4, 5];

// for eg we want to skip first 2 and copy the rest of the entire array 

var [ , , ...newarr] = arr;
print(newarr);

// passing an object property to function destructured
var dimensions = {x:25, h:20, w:50, y:35}

function area({h, w}){ // only mentioned properties will be taken from the object
  return h*w;
}

print(area(dimensions));

// Code below this line is for lesson 6 where we learn import and export

export const capatlizestring = (string) => string.toUpperCase(); // arrow function implementation

// export function capatlizestring(string){   // regular function implementation
//   return string.toUpperCase();
// }
