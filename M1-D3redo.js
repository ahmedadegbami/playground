a = 2
b = 3
c = 5

function add(x,y,z) {
if (z) {
            return (x + y + z);
        } 
        else
        {
            return (x + y);
        }
    }
console.log(add(a,b,c))


let sum = (x,y) => {
    return x + y
}

console.log(add(a,b))

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

// We have the promitive data types which are Number (1,2,3), strings ("a","b", "c"), booleans (True and false). 
// Others includes: underfined(the default value) , null(emptied) and infinity

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

// a variable is like a container for keeping stuffs

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let addNumber = (x,y) => {
    return x + y
}
let result = addNumber(12, 20)
console.log(result)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12
console.log(x)
/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

const name = "John Doe"
console.log(name)

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let y = 12 - x
console.log(y)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"

let verify = name1 === name2
console.log(verify)


let verify2 = name1.toLowerCase === name2.toLowerCase
console.log(verify2)

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 6

switch (x < 10){
    case 0: "zero"
    break;
    case 1: "one"
    break;
    case 2: "two"
    break;
    case 3: "three"
    break;
    case 4: "four"
    break;
    case 5: "five"
    break;
    case 6: "six"
    break;
    case 7: "seven"
    break;
    case 8: "eigth"
    break;
    case 9: "nine"
    break;

}
console.log(x)

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

age = 20

let tenaryOperator = (age > 18) ? false : true;

console.log(tenaryOperator)


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/

// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
console.log("\n========================== EXTRA ====================================")

isMale = true

let gender = (isMale === true) ? "male" : "female";

console.log(gender)

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

a = 4
b = 6

if ( (a === 8)|| (a + b === 8 ) || (a - b === 8 )){
    console.log(true)
} else {
    console.log(false)
}

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

let names = name1 + name2
console.log(names)

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

x = 12
y = 23
let z = 28

function arrangeHighTolow(x,y,z){

if ((x > y) && (y > z)){
    console.log(x,y,z)
} else if ((x > y) && (z > y)){
    console.log(x,z,y)
}

if ((y > x) && (x > z)){
    console.log(y,x,z)
} else if ((y > z) && (z > x)){
    console.log(y,z,x)
}

if ((z > y) && (y > x)){
    console.log(z,y,x)
} else if ((z > x) && (x > y)){
    console.log(z,x,y)
}
}

let HighLow = arrangeHighTolow(90,14,87)

console.log(HighLow)



/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/


a = 10
b = 20

function findAverage(a,b) {

    return ((a + b) / 2)

}

result = findAverage(a,b)
console.log(result)



/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

 let string1 = "Ahmed"
 let string2 = "Adegbami"

 if (string1.length > string2.length) {
     console.log("Ahmed is the longest")
 }else if (string2.length > string1.length) {
     console.log("Ahmed is short!!!")
 }
/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

x = 10

if (typeof x === "number") {
    console.log("x is a number")
} else {
    console.log("x is another data type")
}

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

 x = 400 * 0.2
 console.log(x)

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

x = 10

if (x % 2 === 0) {
    console.log("x is an even number")
} else {
    console.log("x is an odd number")
}

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
