const name = 'haider'
const phrase = 'skywalker commands the 501st legion'

// Length of a string
console.log(name.length)
var len = phrase.length
console.log(len)

// string indexing
console.log(name[0])
console.log(name[name.length-1])

// array
var array1 = ['CS', 2024]
var array2 = [['DLD', 'MWF'], ['EM', 'MW'], ['DB', 'MW'], ['AI', 'MW']]
console.log(array1)
console.log(array2)
console.log(array2[0])

array2[1] = ['EM', 'TR']
console.log(array2)
console.log(array2[0][1])

array2.push(['NOC', 'MW']) // push adds to the last
console.log(array2)

var temp = array2.pop() // pop removes last
console.log(temp)
console.log(array2)

temp = array2.shift() // shift removes the start
console.log(temp)
console.log(array2)

array2.unshift(temp)
console.log(array2) // unshift adds to the start

// condition blocks
function test(input1, input2){
    if (input1 >= 50){
        return true
    }
    else if (input2 >= 50){
        return true
    }
    else{
        return false
    }
}

// print function - we can print like python
function print(input){
    console.log(input)
}

var result = test(30 ,50);
print(result);

// Switch Statements 
function gradecalculator(points){
    var grade = "";
    switch(points){
        case 4: grade = 'A & A+';
        break;

        case 3.67: grade = 'A-';
        break;

        case 3.33: grade = 'B+';
        break;

        case 3: grade = 'B';
        break; 
        
        case 2.67: grade = 'B-';
        break; 

        case 2.33: grade = 'C-';
        break;

        case 2: grade = 'C';
        break;

        case 1.67: grade = 'C-';
        break;

        default: grade = 'F';
        break;
    }
    return grade;
}

var grade = gradecalculator(3.33);
print(grade)

// direct true false returning 

// instead of func1, we can acheive the same output from func2 more optimally 
function func1(a, b){
    if (a < b){
        return true;
    }
    else{
        return false;
    }
}

function func2(a, b){
    return a < b;
}

print(func1(3, 5))
print(func2(3, 5))