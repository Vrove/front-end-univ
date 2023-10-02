//Rest & Spread Operator

//Rest Operator

// const penjumlahanArray = (...params) => {
//     let total = 0
//     params.forEach(item => {
//         total += item
//     })
//     console.log(`hasil dari ${params} adalah ${total}`)
// }

// penjumlahanArray(10,2,5)

//Spread Operator
// let array1 = [1,2,3,4,5,6]
//console.log(...array1)

//1.DUplikasi Array
// let array2 = [array1]
// console.log(array2)
// array1.push(5)
// console.log(`Array 1 = ${array1}`)
// console.log(`Array 2 = ${array2}`)

//2. Menggabungkan Array
// let array1 = [1,2,3]
// let array2 = [5,6,7]
// let array3 = [8,9,10]

// let combineyArray4 = array1.concat(4, array2,array3)
// console.log(combineyArray4)

// let combineyArray5 = [...array1, 4,...array2, ...array3];
// console.log(combineyArray5)

//pada Objek

// let john = {
//     fullName : 'John Doe',
//     age:30,
//     address:"Manado",
// }

// let student= {...john}
// john = {...john, job:"Teacher"}
// console.log(john)

//menggabungkan objek
// let obj1 = {a:1, b:2}
// let obj2 = {c:3, d:4}

// let combineObject = {...obj1,...obj2}
// console.log(combineObject)

//Destructuring
let fruits = ["apel", "klengkeng", "durian"]

let [ , ,buah3] = fruits

console.log(buah3)

let orang = {
    nama : "Joko",
    umur : 18,
    sudahMenikah : false
}

let{nama,umur,sudahMenikah,job="Dosen"} = orang
console.log(nama,umur,sudahMenikah,job)