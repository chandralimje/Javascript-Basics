console.log("------------------------ Regular Function -----------------------")

function adding(){
    console.log(12+36)
}
adding()
// ------------------------------------------------------------

console.log("")

let num1 = + prompt("Enter first number")
let num2 = + prompt("Enter second number")
console.log("Addition is :" + (num1 + num2))
// ------------------------------------------------------------

console.log("")

function solve(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 / num2)
    console.log(num1 * num2)
}
solve(16, 9)
// ------------------------------------------------------------

console.log("")

function msg(Name) {
    console.log(`Hello ${Name} Welcome to My Website`)
}
msg("Ashwin")
msg("Kartik")
msg("Shubham")
// ------------------------------------------------------------

console.log("")

function data(num1, num2) {
    // console.log(num1 + num2)
    let data2 = num1 + num2
    return data2 
}
// data(15, 44)
console.log(data(15, 44))
// ------------------------------------------------------------

console.log("")

function marks() {
    console.log("Aryan : 85")
    console.log("Kanchan : 70")
    console.log("Amit : 62")
    console.log("Komal : 56")
    console.log("Shubham : 77")
}
marks()
// ------------------------------------------------------------


console.log("------------------------ Arrow Function -----------------------")

let text = () => console.log("Welcome User")
text()
// ------------------------------------------------------------
console.log("")

const sub = data1 => data1 * 3
let add = sub(120)
console.log(add)
// ------------------------------------------------------------
console.log("")

const can =(point5, point6) => point5 + point6
let frame = can(550,700)
console.log(frame)
// ------------------------------------------------------------
console.log("")

let fruit = () => console.log("Banana, Guava, Dragon fruit")
fruit()
// ------------------------------------------------------------
console.log("")

let coldDrinks = () => console.log("CocaCola, ThumsUp, Pepsi")
coldDrinks()

console.log("------------------------ Annonymous Function -----------------------")

let name = function (num1, num2) {
    console.log(num1 + num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
    console.log(num1 - num2)
}
name(85, 65)
// ------------------------------------------------------------
console.log("")

let Dot = function (point1, point2) {
    console.log(point1 * point2)
}
Dot(32, 45)
// ------------------------------------------------------------
console.log("")

var greet = function (platform) {
    console.log("Welcome to", platform)
}
greet("Paris")
// ------------------------------------------------------------
console.log("")

let area = function(length, breadth){
    return length * breadth 
}
let x = area(10,5) 
console.log("Area of the rectangle is = ", x);
// ------------------------------------------------------------
console.log("")

const Pop = function (better) {
    console.log("This is your", better)
}
Pop("Car")

console.log("------------------------ IIFE Function -----------------------")


let person = {
    firstName: 'John',
    lastName: 'Doe'
};
(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

// ------------------------------------------------------------------

(function (name) {
    let course = "Java"
    console.log("Hello : " +name + " | " + course)
})("Puja")

// ------------------------------------------------------------------

let electric = {
    Ac: "Television",
    price: "RS.35000"
};
(function () {
    console.log(electric.Ac + ' | ' + electric.price);
})(electric);

// ------------------------------------------------------------------

(function (bike) {
    let price = 'Rs. 85000'
    console.log(bike + " | " + price)
})("Honda");

// ------------------------------------------------------------------







