// Write a program using a switch statement that takes a number (1 to 7) as input and outputs the corresponding day of the week.


// const dayNumber = 5;

// switch (dayNumber) {
//     case 0:
//         console.log('It is Sunday')
//         break;
//     case 1: 
//         console.log('It is Monday')
//         break;
//     case 3: 
//         console.log('It is Tuesday')
//         break;
//     case 4:
//         console.log('It is Wednesday')
//         break;
//     case 5:
//         console.log('It is Thursday')
//         break;
//     case 6:
//         console.log('It is Friday')
//         break;
//     case 7:
//         console.log('It is Saturday')
//         break;

//     default:
//         console.log('Invalid day number')
//         break;
// }


// Write a program using a switch statement that performs basic arithmetic operations (addition, subtraction, multiplication, division). The user should input two numbers and an operator (+, -, *, /), and the program should return the result.


const a = parseInt(prompt('Enter a number'))
const b = parseInt(prompt('Enter b number'))

let operator = prompt('Enter an operator (+, -, *, /)')

switch (operator){
    case '+':
        console.log(a + b);
        break;

    case '-':
        console.log(a - b);
        break;

    case '*':
        console.log(a * b);
        break;

    case '/':
        console.log(a / b);
        break;

    default :
        console.log('Invalid operator');
        break;
}

// Write a program using a switch statement that takes a number and determines if it is odd or even.


// const num = 3;

// switch (true) {
//     case num % 2 === 0:
//         console.log('It is even number')
//     break;

//     case num % 2 === 1:
//         console.log('It is odd number')
//     break;

//     default:
//         console.log('Invalid number')
//         break;
// }