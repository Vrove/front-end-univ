const students = ['John', 'Peter', 'Jack', 'Jane']
const numbers = [1,2,3,4,5]
const john = ['John', 'Doe', 33, true]

// console.log(students)
// console.log(numbers)
// console.log(john)

// let mahasiswa = new Array('Vincent', 20, 'FILKOM')

// console.log(students[2])
// //Lengthb
// console.log(students.length)
// console.log(students[students.length - 1])

// //mengakses seluruh elemen array
// for(let i=0; i<students.length; i++){
//     console.log(students[i])
// }

// //Array Method
// //toString()
// console.log(students.toString())
// //join()
// console.log(john.join('-'))

// john.pop()
// console.log(john.join())

// john.push("Rawr")
// console.log(john.join())

// john.shift()
// console.log(john.join())

// john.unshift("Hello")
// console.log(john.join())

john.splice(3,0)
console.log(john.join())

john.slice(0,3)
let johndoe = john.slice(3)


// console.log(john.join())
// console.log(johndoe.join())

// let kombin = john.concat(johndoe, numbers)

// console.log(kombin.join())

//Object
// let john = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 33,
//     isMarried: true,
//     grade: [80,90,100],
//     address:{
//         city: 'Manado',
//         province: 'Sulawesi Utara',
//         postalCode: '95371',
//     },
//     sayGreetings: function(){
//         console.log("Hello, my name is " + this.firstName)
//     },
// }

//dot notation
// console.log(john.firstName)
// console.log(john.grade[2])
// console.log(john.address.city)
// console.log(john.sayGreetings())

// //bracket notation
// console.log(john["firstName"])
// console.log(john[grade][2])
// console.log(john["address"["city"]])
// console.log(john["sayGreetings"]())

//Array Object

// let students = [
//     {
//         id: 1,
//         name : "john"
//     },
//     {
//         id: 2,
//         name : "jack"
//     },
//     {
//         id: 3,
//         name: "peter"
//     }
// ]


//Array Built-in Method

//forEach

// students.forEach(function(item){
//     console.log(item.name)
// })

// //map()
// let output= students.map(function(item){
//     return item.name;
// })
// console.log(output)

//Filter()
// let output= students.filter(function(item){
//     return item.name === "john";
// })
// console.log(output)

//find()    
// let output= students.find(function(item){
//     return item.name;
// console.log(output)