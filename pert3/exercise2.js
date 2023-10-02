//buat fungsi yang menerima 1 parameter angka
//dan mengembalikan string apakah angka yang dimasukan
//adalah bilangan ganjil atau genap
//menggunakan bentuk IIFE dan Callback Function

//Vincent Supit

//IIFE

// (function (angka) {
//     const cekGanjilGenap = angka % 2 == 0 ? "angka genap"  : "angka ganjil"
//     console.log(cekGanjilGenap)
// })(9)

//Callback Function

function createGanjilGenap(angka, balik){
    let cekGanjilGenap = angka % 2 == 0 ? "angka genap"  : "angka ganjil"
    balik(cekGanjilGenap)
}

function logGanjilGenap(cekGanjilGenap){
    console.log(cekGanjilGenap)
}

createGanjilGenap(2, logGanjilGenap)