/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
// function area(l1,l2) {
//     return l1 * l2
// }
const area = (l1,l2) => {
    return l1 * l2
}

console.log(area(20,30))


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = (i1, i2) => {
        return i1 === i2 ? (i1 + i2) * 3 : i1 + i2
   
}

console.log(crazySum(8,4))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = (x) => {
    return (x >19)  ? Math.abs(x-19) * 3 : Math.abs(x-19)
}

console.log(crazyDiff(3))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n){
    if (n > 20 && n < 100 || n === 400){
        return true
    } else{
        return false
    }
}

console.log(boundary(800))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(text) {
    if(text.startsWith("Strive")){
        return text
    } else {
        return text + " " + "Strive"
    }
}

console.log(strivify("Football"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(num){
    if (num > 0 && num % 3 === 0 && num % 7 === 0){
        console.log("num is a mutilple of 3 and 7")

    } else if ( num > 0 && num % 7 === 0 ){
        console.log("num is a mutilple of 7")

    } else if  ( num > 0 && num % 3 === 0 ){
        console.log("num is a mutilple of 3")
    } else {
        return "num is not a muliple of 3 and 7"
    }
}

console.log(check3and7(9))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("Adegbami"))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(upperFirst ("strive"))

// /* EXERCISE 9
//  Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
// */

// function cutString(str){
//     return str.slice(1, str.length - 1)
// }

// console.log(cutString("Strive"))

// /* EXERCISE 10
//  Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
// */

// function giveMeRandom(n) {
//     let arr = []
//     for (let i = 0; i <= n; i++){

//     let random = Math.floor(Math.random() * 10)
//     arr.push(random)
//     }
//     return arr
// }

// console.log(giveMeRandom(6))


// /* WHEN YOU ARE FINISHED
//  Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
// */