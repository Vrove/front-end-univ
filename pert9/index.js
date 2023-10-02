// import hello, { fullName, numbers, john } from "./utils.js"
// import sayGreetings from "./sayGreetings.js"

// console.log(fullName)
// console.log(numbers)
// console.log(john)
// hello()
// sayGreetings()

//Aynchronous JS

//synchronous => single thread => blocking
//console.log("Press 1")

//asynchronous > multi thread > nonblocking
//1.parallel
// setTimeout(() => {
//     console.log("proses 1")
// },3000)
// console.log("proses 2")
// setTimeout(() => {
//     console.log("proses 3")
// },4000)
// console.log("proses 4")

//concurrent
// 1.callback
setTimeout(() => {
    console.log("Proses 1")
    setTimeout(() => {
        console.log("Proses 2")
        setTimeout(() => {
            console.log("Proses 3")
            setTimeout(() => {
                console.log("Proses 4")
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);

//2.promise
let condition = true
const newPromise = new Promise((resolve, reject) => {
     if(condition){
        resolve("Berhasil")
     }else{
        reject("Gagal")
     }
})

//pakai promis
//1. then-catch
newPromise.then((result) => {
    console.log(result)
}).catch((error) => console.log(error))

//2. async - await(es7)
//async-await digunakan pada fungsi

const consumePromise = async () => { 
    try{
        let result = await newPromise
        console.log(result)
    }catch(error){
        console.log(error)
    }
}
consumePromise();