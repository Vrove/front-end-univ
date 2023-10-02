//Kelompok
/*
Supit, Vincent Vian
Tjiwili, Derald Febri
Komaling, Falerey Malfin
Likuayang, Nazar
Pelealu, Ezra Willy Daniel
Polii, Matthew Philip
*/

//Destructuring
//ARRAY
// let buahan = ["apel", "pisang", "mangga"]

// let [buah1, buah2, buah3] = buahan

// console.log(buah1)
// console.log(buah2)
// console.log(buah3)

//OBJECT
// let orang = {
//     nama: "John Doe",
//     umur: 30,
//     pekerjaan: "Programmer"
//   }
  
//   let { nama, umur, pekerjaan } = orang
  
//   console.log(nama)
//   console.log(umur)
//   console.log(pekerjaan)

//Destructuring dengan mengambil sebagian item (Array & Object)
//ARRAY
//Sebagian
// let angka = [1, 2, 3, 4, 5]

// let [item1, item2] = angka

// console.log(item1)
// console.log(item2)

//Posisi Tertentu
// let warna = ["merah", "kuning", "hijau", "biru"];

// const [warna1, , warna3, warna4] = warna

// console.log(warna1)
// console.log(warna3)
// console.log(warna4)

//OBJECT
//Sebagian Properti
// let orang = {
//     nama: "John Doe",
//     umur: 30,
//     pekerjaan: "Programmer"
//   }
  
// let { nama, umur} = orang
  
// console.log(nama)
// console.log(umur)

//Menggunakan Alias
// let orang = {
//     nama: "John Doe",
//     umur: 30,
//     pekerjaan: "Programmer"
// }
      
// let { nama: name, umur: age} = orang
      
// console.log(name)
// console.log(age)

//Destructuring dengan menggunakan default value (Array & Object)
//ARRAY
// let warna = ["merah", "kuning", "hijau"];

// const [warna1, warna2, warna3, warna4 = "biru"] = warna

// console.log(warna1)
// console.log(warna2)
// console.log(warna3)
// console.log(warna4)

//OBJECT
// let orang = {
//     nama: "John Doe",
//     umur: 30,
//     pekerjaan: "Programmer"
// }
      
// let { nama, umur, status = "Menikah"} = orang
      
// console.log(nama)
// console.log(umur)
// console.log(status)

//Destructuring dengan menggunakan rest operator (Array & Object)
//ARRAY
// let warna = ["merah", "kuning", "hijau", "Biru"];

// const [warna1, warna2, ...rest] = warna

// console.log(warna1)
// console.log(warna2)
// console.log(rest)

//OBJECT
// let orang = {
//     nama: "John Doe",
//     umur: 30,
//     pekerjaan: "Programmer",
//     status : "Menikah"
// }
      
// let { nama, ...rest} = orang
      
// console.log(nama)
// console.log(rest)


