//for
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    if(element == 5) {
        console.log("5is best")
    }
}
let array =[1, 3 ,4, 7]
for (let i = 0; i < array.length; i++) {
    console.log(`${i}`);
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        console.log(`${i} ${j}`);
    }
    const element = array[i];
}

let myArr = ["flash", "batman", "superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
}

let index = 0
while (index < 12) {
    console.log(`${index}`)
    index +=2
}

let s =1
do {
    console.log(`${s}`)
    s++ 
} while (s<=10);

const arr = [1, 2, 3, 4, 5]

for(const num of arr) {
    console.log(num)
}

const greet = "hello hi"

for (const greeting of greet) {
    console.log(greet)
}

const map = new Map()
map.set('IN', "India")
map.set('UP', "up")
map.set('MP', "mp")
map.set('HP', "hp")

for (const [key, value] of map) {
    console.log(key)
    console.log(value)
}

const myOb = {
    'g1': 'nfs',
    'g2': 'cod'
}

for (const key in myOb) {
    console.log(key)
    console.log(myOb[key])
}

let code = ["flash", "batman", "superman"]
code.forEach(function(val){
    console.log(val);
});

code.forEach((item) =>{
    console.log(item);
})

code.forEach((item, index, arr) =>{
    console.log(item, index, arr);
})

const co = [
    {
        lang: "js",
        file: "js"
    },
    {
        lang: "py",
        file: "py"
    },
    {
        lang: "java",
        file: "java"
    }
]

co.forEach((item) => {
    console.log(item.lang)
});

const lang = ["js", "py", "ruby"]
const val = lang.forEach((item)=> {
    console.log(item);
    return item
})
console.log(val);

const nimo = [1, 2, 3, 4, 5]

const voo = nimo.filter((num) => num >4)
console.log(voo)

const newn = []

nimo.forEach((num) => {
    if(num > 4) {
        newn.push(num)
    }
});
console.log(newn)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let ub = books.filter((bk) => bk.genre == 'History')
  console.log(ub)

 ub = books.filter((bk) => { 
    return bk.publish >= 1995 && bk.genre == "History"
})
  console.log(ub)

  const nono = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  let newno = nono.map((ni) => ni+10)
  console.log(newno)

  let foo = nono
            .map((fi) => fi*10)
            .map((fi) => fi+1)
            .filter((fi) => fi>=40)
    console.log(foo)

    const ti = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const to = ti.reduce(function(acc, currval){
        console.log(`acc ${acc}, currval ${currval}`)
        return acc + currval
    },0)
    console.log(to)

    const coco = ti.reduce(function(acc, currval){
        console.log(`acc ${acc}, currval ${currval}`)
        return acc + currval
    },0)
    console.log(coco)

    const shop = [
        {
            item: "py",
            price: 299
        },
        {
            item: "js",
            price: 499
        },
        {
            item: "java",
            price: 999
        }
    ]

    let pay = shop.reduce((acc, item) => acc + item.price, 0)
    console.log(pay)
 