// Lesson 4: objects, loops

function print(input){
    console.log(input)
}

// Objects

// Objects are key value pairs in javascript like dictionaries in python & maps in cpp
// Properties is reffered to keys, value is value

var biodata = {
    'Name':'Haider',
    'Age': 21,
    'Gender':'Male',
    'Religon':'Muslim',
    'Nationality':'Pakistani'
}

var name1 = biodata["Name"]; // bracket notation - can be used for all property types including space in property name
var name2 = biodata.Name; // dot notation - only for property with no space

print(name1)
print(name2)

// updating property 
biodata.Name = 'Haider Abbas';
print(biodata);

// adding new property
biodata.City = 'Karachi';

// delete property 
delete biodata.Religon; 

// checking if object contains property 
function namecheck(object, property){
    return object.hasOwnProperty(property);
}

var check = namecheck(biodata, 'Name');
print(check);

// Nested Objects
var studentsemester = {
    'ID': 6418,
    'BioData': biodata,
    'SGPA': 3.88,
    'CGPA':3.55,
    'Courses': {
        'Course1': 'CS102',
        'Course2': 'CS113',
        'Course3': 'CS185',
        'Course4': 'CORE102',
        'Course5': 'ECON121'
    }
}

print(studentsemester)

// Length of an Object
var itemsinbiodata = Object.keys(biodata).length;

var numberofcourses =  Object.keys(studentsemester.Courses).length;
print(numberofcourses);

// Freezing an object 
const mathconstants = {
    'PI':3.14,
    'G':9.8
}

Object.freeze(mathconstants); // Now object items cannnot be changed or altered


// Loops 

// While loop 
var counter = 1;
var lst = [];

while (counter <= 5){
    lst.push(counter);
    counter ++;
} 

print(lst)

// For loop 
var lst = []

for (var i = 1; i<=5; i++){
    lst.push(i)
}

print(lst)

// Do While loop 
var i = 1;
var lst = [];

do {
    lst.push(i);
    i++;
} while (i <= 5);

print(lst);

// returning alternate value is property not found 
var studentlist = [
    {
        'ID':6481,
        'Name':'Haider',
        'Age':21
    },
    {
        'ID':6371,
        'Name':'Ahsan',
        'Age':23
    },
    {
        'ID':6666,
        'Name':'UnKnown',
    }
]

function lookup(id, property){
    for (var i = 0; i < studentlist.length; i++){
        if (studentlist[i].ID === id){
            return studentlist[i].property || 'Property does not exist';
        }
    }
    return 'No record found';
}

print(lookup(6666, 'Age'));

print(lookup(66666, 'Age'));