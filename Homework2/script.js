/*1. Write a calculator. Request 2 numbers and an operation as a symbol (+ - * /). 
The program solves it depending on the operation and shows the result. */

// let num1 = +prompt("inser a number");
// let num2 = +prompt("inser another number");
// let symbol = prompt("inser an operator: + - * /");

// //could also use switch(symbol)

// if ( symbol == "+" ) {
//     alert(`${num1 + num2}`);
// } else if ( symbol == "-" ) {
//     alert(`${num1 - num2}`);
// } else if ( symbol == "*" ) {
//     alert(`${num1 * num2}`);
// } else if ( symbol == "/" ) {
//     alert(`${num1 / num2}`);
// } else {
//     alert('incorrect value')
// }

/*2. Count the factorial of the number given by a user. 
For example, 4! is 1 * 2 * 3 * 4 = 24, or 6! is 1 * 2 * 3 * 4 * 5 * 6 =  720.*/

// let num = +prompt("insert a number");
// let i = 1;
// let result = 1; 

// while (i <= num) { 
//     result *= i;
//     i++;
// }

// console.log(result)

/* 3. Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur:
 "1 sheep...2 sheep...3 sheep..." to the page as a paragraph. If a user types a negative number in, 
 alert an error.*/

// let sheep = prompt("How many sheep do you see?");

// for (let i = 1; i <= sheep; i++) {
//     document.write(`<p>${i} sheep</p>`)
// }

// if (sheep <= 0) {
//     alert("No sheep!")
// }

let sheep = prompt("How many sheep do you see?");

if (sheep >=1) {
    for (let i = 1; i <= sheep; i++) {
        document.write(`<p>${i} sheep</p>`)
    }
} else {
    alert("No sheep!")
}



/* 4. Show a user the prompt where they have to write a correct answer for 2 + 2 * 2. 
Show the prompt as many times until the user answers correctly. */

// let result;

// do {
//     result = prompt("Write the correct answer to 2 + 2 * 2");
// } while (result !=6);




