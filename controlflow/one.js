if(false){
    console.log('hi')
}

const bal =1000
if(bal > 500) console.log("test") // implicit scope

if(bal<500) {
    console.log("no 500")
} else if(bal <750) {
    console.log("no 750")  
} else {
    console.log("yes 1000")
}

const user= true
const debit = true

if (user && debit) {
    console.log("allow buy")
}

const month = 3

switch(month) {
    case 1:
    console.log("jan");
    break;
    case 2:
    console.log("feb");
    break;
    case 3:
    console.log("mar");
    break;
}

//falsy value: false, 0, -0, bigInt 0n, "", null, undefined, NaN

//true "0",'false'," ",[], {}, function(){}

if(month.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}
if (Object.keys(emptyObj).length ===0){
    console.log("Object is empty")
}

false == 0 //true
false == ''//true
0 == ''//true

//nullish coalescing operator (??):null undefined

let v1;
//v1 = 5 ?? 10
v1 = null ?? 10
console.log(v1)
v1 = undefined ?? 15
console.log(v1)
v1= null ?? 10 ?? 20
console.log(v1)

//terniary operator
//condition ? true : false
const ic = 100
ic >= 80 ? console.log("less"): console.log("more 80")

