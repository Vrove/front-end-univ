//String Literal
let fullName = "John Doe"
let age = 33
let address = "Manado"

// Halo nama saya John Doe, umur saya 33 tahun
// dan saya tinggal di manado

// let kalimat5 = "Halo nama saya " + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address

// console.log(kalimat5)

// let kalimat6 = `halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`

// console.log(kalimat6)

//Arrow Function
//--------------



// function namaFungsi(nama){
//     return `el gato ${nama}`
// }

// console.log(namaFungsi("John"));

// let nama = "Vincent"

// const sayGreetings = (nama) => {
//     nama = "Vincent"
//     return `Hello ${nama}`
// }

// console.log(sayGreetings())

//Implicit Return value
// const sayGreetings = (nama) => `Hello ${nama}`

// console.log(sayGreetings())

//Pada IIFE
// let output1 = (() => {
//     console.log("Hello")
// })

// pada callback
// let numbers = [1,2,3,4,5]
// let output2 = numbers.map ((item) => item)
// console.log(output2)

//Default Parameter
//-----------------

// const sayGreetings = (fullName) => {
//     if (fullName === undefined){
//         fullName = "John Doe"
//     }
//     if (age === undefined){
//         age = 30;
//     }
//     console.log(`Hello ${fullName}`)
// }

// sayGreetings()

// const sayGreetings6 = (fullName = "John Doe", age = 30) => {
//     console.log(`Hello ${fullName}, im ${age} years old`)
// }

// sayGreetings6("Peter")

const makanan = (nama,lama,suhu) => {
    console.log(`Panggang ${nama} selama ${lama} pada suhu ${suhu} Celcius`)
}

makanan("Biapong", "10 jam", "100")

