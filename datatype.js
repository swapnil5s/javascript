//primitive
//7 types: string,number,boolean, null, undefined, symbol, bigint
const id = Symbol('123')

const score =100
const scoreValue = 100.3

const isLog = false
const tempo = null

let userEmail;
const bigNum = 32456786n
//reference non primitive
//array, object, function

const heros = ["shaktiman", "nagraj"]
let myObj = {
    name:"hero",
    age: 2
}

const myFunc = function() {
console.log("hello")
}

console.log(typeof bigNum)

//stack(primitive), heap(non-primitive)

let helo = "swapnil"
let another = helo
another = "coffee"

console.log(helo)
console.log(another)

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "holo@gmail.com"
console.log(user1)
console.log(user2)