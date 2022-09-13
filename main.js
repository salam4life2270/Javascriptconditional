/* Description of data using the appropriate daratype */

let name = "names of the people"; // This is a string datatype
let dateOfBirth = "DOB of the people"; // This is a string datatype
let numberOfChildren = 5; // This is a number datatype
let country = "country of origin" // This is a string dststype
let knowHowToProgram = true; // This is a boolean datatype

/* Representing each person in an array */

let myName = ["Ambrosius Huyche", "Blondelle Beech", "Kathryne Ferraraccio", "Husain Undy", "Rosalind Hefner"]
let myDateofbirth = ["2/7/1999", "6/2/1984", "7/16/1989", "3/6/1981", "11/8/1984"]
let myNumberOfChildren = [5,3,0,4,0]
let myknowHowToProgram = [false,true,true,false,false]

/* Representing each person by an in an array */

let person = [
 {
    firstPersonName: "Ambrosius Huyche",
    firstPersonDob: "2/7/1999",
    firstPersonNoOfChildren: 5,
    firstPersonNationality:"Canada",
    firstPersonKnowsHowToProgram: false
 },
 {
    secondPersonName: "Blondelle Beech",
    secondPersonDob: "6/2/1984",
    secondPersonNoOfChildren: 3,
    secondPersonNationality:"China",
    secondPersonKnowsHowToProgram: true
 },
 {
    thirdPersonName: "Kathryne Ferraraccio",
    thirdPersonDob: "7/16/1989",
    thirdPersonNoOfChildren: 0,
    thirdPersonNationality:"Japan",
    thirdPersonKnowsHowToProgram: true
 },
 {
    fourthPersonName: "Husain Undy",
    fourthPersonDob: "3/6/1981",
    fourthPersonNoOfChildren: 4,
    fourthPersonNationality:"Honduras",
    fourthPersonKnowsHowToProgram: false
 },
 {
    fifthPersonName: "Rosalind Hefner",
    fifthPersonDob: "11/8/1984",
    fifthPersonNoOfChildren: 0,
    fifthPersonNationality:"Albania",
    fifthPersonKnowsHowToProgram: false
 },
 
]
console.log(person);

/* answering questions using if statements and consol.log() */

// Is the first person older than the last? The answer is NO because the first person's age is 23 while the last person's age is 38.

const age = 23;
if(age>38) {
    console.log("The first person is older than the last person");
} else {
    console.log("The first person is not older than the last person")
}

// Does the second person have the same number of kids as third? The answer is no because the second person as three kids while the third person as no kid.

const number = 3;
if(kids=0) {
    console.log ("Yes the second person and the third person have the same amount of kids")
} else {
    console.log ("The second person and the third person do not have the same number of kids")
}

/* Create a statement that checks if the 1st person and the 4th person in the array both know how to program. If yes, output “Yay!”, if not output “LMGTFY”*/

let firstPersonKnowsHowToProgram = false;
let fourthPersonKnowsHowToProgram = false;
if(firstPersonKnowsHowToProgram === false && fourthPersonKnowsHowToProgram === false) {
    console.log("LMGTFY");
}  else {
    console.log("Yay!") // LMGTFY is printed because the both do not know how to code
}
/* Creating a statement that checks the 2nd person in the array for their nationality. If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”). If the country is none of the above, output “Hello”.*/

var Nationality = 'China';
switch (Nationality) {
    case 'Iceland':
    console.log('Hæ');
    break;
    case 'Spain':
    console.log('Holla');
    break;
    case "Korea":
    console.log("여보세요");
    break;
    default:
    console.log('Hello'); // The output is hello because the second person nationality which is China is not listed above
    break;
}

/* Using a ternary operator to output if the 2nd person’s name is longer than 5 characters.*/
let characters = 14;
result = (characters > 5) ? "Yes" : "No";
console.log("result");
