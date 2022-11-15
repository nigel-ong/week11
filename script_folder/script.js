// simple function

// function greet(somename){
//     return console.log(`Hello ${somename}!`);
// }

// variable as a function

// let greet = function (somename){
//     return console.log(`Hello ${somename}!`);
// }

// arrow function

// let greet = (somename) => {
//     return console.log(`Hello ${somename}!`);
// }

// how to add a default value to time, but if we pass a value it will be invoked
// function greet(somename, time = "Day"){
//     console.log(`Good ${time} ${somename}!`);
// }

// greet("Nigel");
// greet("Neda");


const unorderedListElement = document.querySelector(".shopping")
function populateList(list){
    for (let i = 0 ; i <list.length; i++){
        console.log(list[i]); // for each of these items, create and li, append it to an unorderedlistElements
        const foodlistElement = document.createElement("li")
        foodlistElement.textContent = list[i];
        unorderedListElement.appendChild(foodlistElement);
    }
}

let shippingList = ["cheese", "bread", "pepper"];

populateList(shippingList);