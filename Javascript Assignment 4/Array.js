console.log("---------------------- Array Function---------------------")

let name1 = "Akshay"

console.log(name1)
let point = [500, "Welcome", true, name1]
console.log(point)
console.log(point[1])


// ------------------------- Array Method--------------------------

// 1. add new element at the end

let number = [56, 81, 67, 43, 66, 90, 34, 22]
number.push(100)
console.log(number)

const colour = ["Red","Blue","Pink",]
colour.push("Black")
console.log(colour)
// ------------------------------------------------------

// 2. delete last element

let number1 = [156, 267, 453, 234, 987, 452, 521]
number1.pop()
console.log(number1)

var birds = ["Eagle","Duck","Kingfisher","Magpie","Goldfinch"]
birds.pop()
console.log(birds)
// ------------------------------------------------------

// 3. add new element at the start

let number2 = [65, 88, 97, 65, 21, 44, 99, 11, 55]
number2.unshift(555)
console.log(number2)
console.log(number2[7])

const animal = ["Lion","Tiger","Horse","Horse","Donkey"]
animal.unshift("Pig")
console.log(animal)
// ------------------------------------------------------

// 4. delete new element at the start

let number3 = [7654, 2432, 65, 5342, 9876, 532, 6254]
number3.shift()
console.log(number3)
console.log(number3[5])

const bike = ["Yamaha","Royal Enfield","Hero","BMW","TVS"]
bike.shift()
console.log(bike)