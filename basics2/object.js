//singleton
Object.create
//object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "hi",
    age: 20,
    [mySym]: "key1",
    location: "basti",
    isThere: false,
    login: ["mon", "tue"]
}


console.log(jsUser.name)
console.log(jsUser["age"])
console.log(jsUser.mySym) //symbols can't be accessed like this
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])
//Object.freeze(jsUser) //changes not allowed to be changed
jsUser.location = "paris"
console.log(jsUser)
jsUser.greet = function() {
    console.log("hello")
}

console.log(jsUser.greet())
myArr = ["s", "w"]
//-------------------------------------------------object2

const tinder = new Object()

tinder.id="123",
tinder.name= "babu"
tinder.logged = true
const tinder1 = {}
console.log(tinder)
console.log(tinder1)

const regular1 = {
 email: "baburao1@gmail.com",
 fullname: {
    userfull: {
        firstname: "titi",
        lastname: "raju"
    }
 }
}

console.log(regular1.fullname.userfull.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {obj1, obj2}
console.log(obj3)
const obj4 = Object.assign(obj1, obj2, {})
console.log(obj4)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(tinder.hasOwnProperty('logged'))

const {logged: log} = tinder
console.log(log)