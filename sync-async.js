console.log("one")
console.log("two")

setTimeout(() => {
    console.log("I am async, I am not blocking anyone shine")
}, 3000)
console.log("three")
console.log("four")
console.log("five")