// simple function

function greet(somename){
    return console.log(`Hello ${somename}!`);
}

// variable as a function

// let greet = function (somename){
//     return console.log(`Hello ${somename}!`);
// }

// arrow function

// let greet = (somename) => {
//     return console.log(`Hello ${somename}!`);
// }

// how to add a default value to time, but if we pass a value it will be invoked
function greet(somename, time = "Day"){
    console.log(`Good ${time} ${somename}!`);
}

greet("Nigel");
greet("Neda");