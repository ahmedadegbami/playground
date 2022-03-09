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
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let myArray = [1,2,3,4,5]

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let myDetails = {
    name: "Ahmed",
    surname: "Adegbami",
    email: "ahmed.adegbami@gmail.com",
    age: 32
}

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

myDetails.driverlicense = true
console.log(myDetails)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete myDetails.age
console.log(myDetails)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let mySon = {
    name: "Adam",
    surname: "Adegbami",
    email: "adam.adegbami@gmail.com",
    age: 8
}

if (myDetails.email !== mySon.email) {
    console.log("Are the emails differnt?", true)
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 100
if (totalShoppingCart <= 50){
    totalShoppingCart += 10


//     console.log(totalShoppingCart, "Hurray! Free Shipping")

// } else {

//     console.log(totalShoppingCart + 10,"Shipping cost included")
}

console.log(totalShoppingCart)

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let discount = totalShoppingCart * 0.2

let totalPay = totalShoppingCart-discount
console.log(totalPay)

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let myRedCar = {
    brand: "Mercedez-Benz",
    model: "K180",
    licensePlate: "HH 1673"
}

// myBlueCar = {}
// Object.assign(myBlueCar,myRedCar)
// myBlueCar.licensePlate = "HH 1563"

// myGreenCar = {}
// Object.assign(myGreenCar,myRedCar)
// myGreenCar.licensePlate = "HH 1738"

// myWhiteCar = {}
// Object.assign(myWhiteCar,myRedCar)
// myWhiteCar.licensePlate = "HH 9037"

// myBlackCar = {}
// Object.assign(myBlackCar,myRedCar)
// myBlackCar.licensePlate = "HH 3739"

let myBlueCar = {
    ...myRedCar,
    licensePlate: "HH 1563"
}

let myGreenCar = {
    ...myRedCar,
    licensePlate: "HH 1738"
}
let myWhiteCar = {
    ...myRedCar,
    licensePlate: "HH 9037"
}
let myBlackCar = {
    ...myRedCar,
    licensePlate: "HH 3739"
}


console.log(myRedCar, myBlueCar, myGreenCar, myWhiteCar, myBlackCar)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [myRedCar, myBlueCar, myGreenCar, myWhiteCar, myBlackCar]
console.log(carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

// carsForRent.splice(0,1, "Ahmed")
// carsForRent.splice(4,1)

carsForRent.pop()
carsForRent.shift()

console.log(carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
for (let car of carsForRent){

    console.log(car.brand, car.model, car.licensePlate)

}
/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [myRedCar,myGreenCar,myBlueCar]
let totalCars = carsForRent.length + carsForSale.length
console.log(totalCars)



/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i].brand, carsForSale[i].model, carsForSale[i].licensePlate)
}

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/


console.log("\n========================THE EXTRA STARTS HERE=============================")

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let newArray = [5,4,3,2,1]
// [1,4,3,2,5] => I will swap 1 and 5
// [1,2,3,4,5] => I will swap 2 and 4

for (let i = 0; i < newArray.length/2; i++){
    let temp = newArray[i] // I create a new container for exchange later
    newArray[i] = newArray[newArray.length - i - 1] // I swap 1 for last, second with second to the last.....
    newArray[newArray.length - i - 1] = temp // then I swap back
    

}

console.log(newArray)



// console.log(newArray.reverse())  




/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/


let maxValue = newArray[0]
for (let i = 1; i < newArray.length; i++){
    if (newArray[i] > maxValue)
    maxValue = newArray[i]
}
    console.log(maxValue)



/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let minValue = newArray[0]
for ( let i = 1; i < newArray.length; i++){
    if (newArray[i] < minValue)
    minValue = newArray[i]

}

console.log(minValue)

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let allArray = [ 12, 13, "string", 16, 8,]
let evenNumber = []
for ( let i = 1; i < allArray.length; i++){
    if( typeof allArray[i] === "number" && allArray[i] % 2 === 0){
        evenNumber.push(allArray[i])

    }

}
console.log(evenNumber)



/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

allArray = [ 12, 13, "string", 16, 8,]

for ( let i = 0; i < allArray.length; i++){
    if( typeof allArray[i] === "number" && allArray[i] % 2 === 0){
        delete allArray[i]

    }

}
console.log(allArray)

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let allLetterstring = "adegbamiahmed"
let result = ""

for ( let i = 0; i < allLetterstring.length; i++){
    switch (allLetterstring[i]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        break;
    default:
        result += allLetterstring[i]

    }
}
console.log(result)


console.log("\n ===Second way===")

const noVowels = allLetterstring.replace(/[aeiou]/gi, '');

console.log(noVowels);


    

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let myNumbers = [1,2,3,4,5,6]
for ( let i = 0; i < myNumbers.length; i++){
    myNumbers[i] += 1
}
console.log(myNumbers)

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
 let advert = ["Ahmed", "the", "great"]
 for ( let i = 0; i < advert.length; i++){

 
     advert[i] = advert[i].length
 
}
     console.log(advert)



/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/