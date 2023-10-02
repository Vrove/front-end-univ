// console.log(greetings("Vincent")) //Argument
// const age = 20

// function greetings(name,age){ //Parameter
//     console.log(age);
//     const job = "teacher"; //local
//     if(job === "teacher"){
//         const address = "Manado"//blok
//     }
//     console.log(address)
//     return name
// }

// greetings(vincent, 20)


//IIFE (Immediately Invoked Function Expression)
//Anonymous Function

// let greetings = (function () {
//     return "Hello IIFE"
// }) ()

// console.log(greetings)

//Callback Function

// function createGreetings(name, balik){
//     const greetings = "Hello " + name
//     balik(greetings)
// }

// function logGreetings(greetings){
//     console.log(greetings)
// }

// createGreetings("Vincent", logGreetings)

// createGreetings("Vincent", function (greetings){
//     console.log(greetings)
// })