// Lesson 3: functions

// function

function makeSentence(myNoun, myAdjective, myVerb, myAdverb){
  var sentence = 'The ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' to the hospital ' + myAdverb;
  return sentence
}

console.log(makeSentence('friend', 'best', 'came', 'quickly'));


function greetings(){
  console.log('Good morning!')
}

greetings();


function print(paramater){
  console.log(paramater)
}

print('hello world')

function percentageCalculator(obtainedMarks, totalMarks){
  var percentage = ((obtainedMarks/totalMarks)*100).toFixed(2)
  console.log(percentage+'%')
}

percentageCalculator(55, 60)


// scope of a variable

var marks = 30 // global variable

function percent(marks, totalMarks){
  percentage = ((marks/totalMarks)*100).toFixed(2) // global variable; as var keyword not used
  // var percentage = ((marks/totalMarks)*100).toFixed(2) // local variable; as var keyword is used
  return percentage
}

percent(55, 60)

function clearStatus(){
  if (percentage > 60){
    return 'PASS'
  }
  return 'FAIL'
}

console.log(clearStatus()); // shows that percentage is a global keyword
// local variable takes precedence over the global variable having the same name

// Function for Determining Golf Score for a hole
function golfscore(par, strokes){
  if (strokes == 1){
    return 'Hole in One'
  }
  else if (strokes <= (par-2)){
    return 'Eagle'
  }
  else if (strokes == (par - 1)){
    return 'Birdie'
  }
  else if (strokes == par){
    return 'Par'
  }
  else if (strokes == (par + 1)){
    return 'Bogey'
  }
  else if (strokes == (par + 2)){
    return 'Double Bogey'
  }
  else{
    return 'Go Home'
  }
}

var hole1 = golfscore(6, 8)
console.log(hole1)

// A function which takes in height and prints a pyramid of that height
function printPyramid(height) {
  for (let i = 0; i < height; i++) {
    let row = "";
    // Add spaces before the stars
    for (let j = 0; j < height - i - 1; j++) {
      row += " ";
    }
    // Add stars
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log(printPyramid(5))

// arrow Functions
// assigning a function to a variable 

var magic = () => new Date();
console.log(magic());

var lstconcatenation = (arr1, arr2) => arr1.concat(arr2);
print(lstconcatenation([1, 3, 5], [7, 9, 11]));

// default parameter in functions

function add(a, b = 1){
  return a+b;
}

print(add(5, 2));
print(add(5));
