console.log("--------------- If Condition --------------")


let age1 = 19
if (age1 > 18) {
    console.log("Driving licence Allowed")
}

console.log("")
console.log("-------------- If else Condition -------------")

let age2 = 17
if (age2 >= 19) {
    console.log("Driving licence Allowed")
}else{
    console.log("Not eligible for Driving licence")
}

console.log("")
console.log("--------------- Nested If Condition --------------")

let age3 = 20
if(age3 >= 18) {
    if(age3 <= 100) {
        
        console.log("Voting Allowed")
    }else {
        console.log("Voting Not Allowed")
    }
} 

console.log("")
console.log("--------------- If else If Condition --------------")

let age4 = 18
if (age4 >= 20) {
    console.log("Voting Allowed")
} else if (age4 >= 17) {
    console.log("Try After Few Years")
}else {
    console.log("Voting Not Allowed")
}

console.log("")
console.log("--------------- For Loop --------------")

for (let i = 21; i<=30; i++) {
    console.log(i)
}

console.log("")
console.log("--------------- While Loop --------------")

let b = 51
while(b <=65) {
    console.log(b)
    b++
}

console.log("")
console.log("--------------- Do-While Loop --------------")

let k = 55
do{
    console.log(k)
    k++
} while(k <= 75)

console.log("")
console.log("--------------- Switch Case --------------")

let choice = prompt(`Select Option
1. Web Devlopment
2. Java Devlopment
3. Cloud Computing
4. Python
5. Artificial intelligence
`)
switch(+choice){
    case 1:
        console.log("Web Devlopment")
        break
    case 2:
        console.log("Java Devlopment")
        break
    case 3:
        console.log("Cloud Computing")
        break
    case 4:
        console.log("Python")
        break
    case 5:
        console.log("Artificial intelligence")
        break
        default:{
            console.log("INVALID CHOICE")
        }
}


