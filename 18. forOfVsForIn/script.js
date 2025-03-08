const fruits = ["Banana", "Grappes", "Watermelon", "Apple"]

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }


// ForOf Loop

// for(const fruit of fruits){
//     console.log(fruit)
// }

// const name = "Hiranmaya"

// for(const letter of name){
//     console.log(letter)
// }


// const person = {
//     firstname: "Hiranmaya",
//     lastname: "Mallik",
//     age: 20,
//     city: "Balasore"
// }

// for (const key in person){
//     console.log(key, " : ", person[key])
// }



//////             for each loop


fruits.forEach((fruit) => {
    console.log(fruit)
});



/// arguments


function add (){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}