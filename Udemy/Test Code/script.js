/*************************************************
// Variables and data types

console.log("hallo World");

let firstName = "John";
console.log(firstName);

let lastName = "Smith";
let age = 28;

let fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = "Teacher";
console.log(job);
*/

/*************************************************
// Variable nameing rules

let _3years = 3;
let johnMark = "John and Mark";
let if = 23;
*/

/*************************************************
 * Variables mutation and type coercion
 

 let firstName = "Johan";
 let age = 28;

console.log(firstName + " "+  age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job +  ". Is he married? " + isMarried);


//Variable mutation 

age = "twenty eight";
job = "driver";

alert(firstName + " is a " + age + " year old " + job +  ". Is he married? " + isMarried);


let lastName = prompt("What is his last name?")
console.log(firstName + " " + lastName);
*/

/*************************************************
 * Basic operatores
 

// Istället för 

// let now = 20118
// let yearJohn = now - 28;
// let yearMark = now - 33;

// definiera allt på en gång 

let year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operatores
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logicl operaters

let johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator = vilken typ av operator

console.log(typeof johnOlder); // boolean
console.log(typeof ageJohn); // number
console.log(typeof ageMark); // number
console.log(typeof "Mark is older then John"); // string

let x;
console.log(typeof x); // undefined
*/

/*************************************************
 * Operator precedence


let now = 2018;
let yearJohn = 1989;
let fullAge = 18;

//Multiple operatores
let isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);


// Grouping
let ageJohn = now - yearJohn;
let ageMark = 35;
let average = (ageJohn + ageMark) / 2;
console.log(average);


// Multiple assignments

let x, y;
x = (3 + 5) * 4 - 6; // 8 * 4  - 6 // 32 - 6 // 26
console.log(x);

// More opreaters 

// x = x 2; lättare sätt at skriva detta 

x *= 2;
console.log(x); // 52 

x += 10;
console.log(x); // 62
x++;
console.log(x); // 63
x--
console.log(x); // 62
 */

/*************************************************
  * If / else statements
  

  let firstName = "John";
  let civilStatus = "singel"

  // kollar civilStatus om true eller false

  if (civilStatus === "married") {
    console.log(firstName + " is married!");
  } else {
    console.log(firstName + " will hopefully marry soon");
  }

  var isMarried = true; // satt redan till true 

  if (isMarried) {
    console.log(firstName + " is married!");
  } else {
    console.log(firstName + " will hopefully marry soon");
  }
*/

/* BMI = mass / height^2 = mass / (height * height)

let massMark = 78; // kg
let heightMark = 1.69; // meters

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark\'s BMI higher then John\'s")
} else {
  console.log("John\'s BMI higher then Mark\'s")
}


let markHigherBMI = BMIMark > BMIJohn;
 console.log("Is Mark\'s BMI higer then John\'s? " + markHigherBMI)

*/

/*************************************************
 * Boolean logic
 
let firstName = "John";
let age = 20;

if (age < 13) {
  console.log(firstname + " is a boy!");
} else if (age >= 13 && age < 20) {
  console.log(firstName +  " is a teenager.");
} else if (age >= 20 & age < 30) {
  console.log(firstName + " is a young man.")
} else {
  console.log(firstName, " is a ma.n");
}
*/

/*************************************************
 * The Ternary Operator and Switch Statements
 

let firstName = "John";
let age = 16;
*/

/*

 age >= 18 ?  console.log(firstName + " drinks beer.")
 : console.log(firstName + " drinks juice.")

 var drink = age >= 18 ? "beer" : "juice";
 console.log(drink);
 */

/* if (age >= 18) {
   var drink = "beer"; 
   } else {
     var drink = "juice"
   }
   */

//Switch Statements

/* 

var job = "teacher";
switch (job) {
  case "teacher":
    console.log(firstName + " teaches kid how to code.");
    break;
  case "driver":    
    console.log(firstName + " drivers an uber in Lisbon.");
    break;
  case "designer":
    console.log(firstName + " designes beautiful websites.");
    break;
    default:
      console.log(firstName + " does somthing else.")
}
*/

/*************************************************
 * functions
 */

function calAge (birthYear) {
  return 2018 - birthYear;
} 

var ageJohn = calAge(1990);
var ageMike = calAge(1948);
var ageJane = calAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearUntilRetirement(year, firstName) {
var age = calAge(year);
var retirement = 65 - age;

if (retirement > 0) {  
  console.log(firstName, "retires in " + retirement + " years")
} else {
  console.log(firstName, " is already retierd")
}
}

yearUntilRetirement(1990, "John");
yearUntilRetirement(1948, "Mike");
yearUntilRetirement(1969, "Jane");