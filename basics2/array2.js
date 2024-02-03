const marvel = ["thor", "groot", "hulk"]
const dc = ["superman", "batman", "flash"]

//marvel.push(dc)

//console.log(marvel)
const all = marvel.concat(dc)
const all1 = [...marvel, ...dc]
//console.log(all)
console.log(all1)

let aloo = [1, 2, [3, 2, [5, 2], [2,5,7,[3,9,8]]],[7,8]]
console.log(aloo.flat(Infinity))

console.log(Array.isArray("swapnil"))
console.log(Array.from("Swapnil"))
console.log(Array.from({name: "Swapnil"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
