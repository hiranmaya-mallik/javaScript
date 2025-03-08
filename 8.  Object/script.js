// what is object :- 


let user = {
    name: 'Hiranmaya Mallik', // here name is key and hiranmaya mallik is value
    age: 20,
}
user.adress = 'haldipada'
user["is-Student"] = true

// console.log(user)


let user1 = {
    firstName: 'Hiranmaya',
    lastName: 'Mallik',
    age: 20,
    adress:{
        city: 'Bhubaneswar',
        state: 'Odisha',
        pinCode: 75756
    }
}
// Object.seal(user1)  // when we use seal function thats lock to the main object and we not changes this property.

Object.freeze(user1) // working same as well as seal function.
console.log(user1)