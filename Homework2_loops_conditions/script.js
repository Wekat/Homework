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

// let sheep = prompt("How many sheep do you see?");

// if (sheep >=1) {
//     for (let i = 1; i <= sheep; i++) {
//         document.write(`<p>${i} sheep</p>`)
//     }
// } else {
//     alert("No sheep!")
// }



/* 4. Show a user the prompt where they have to write a correct answer for 2 + 2 * 2. 
Show the prompt as many times until the user answers correctly. */

// let result;

// do {
//     result = prompt("Write the correct answer to 2 + 2 * 2");
// } while (result !=6);


// EXTRA EXCERSISES

/* Request a number and display all the divisors of it. 
For example, for number 8 it would be 2, 4, and 8. */

// let number = prompt('Type a number');

// for (let i = 0; i < number; i++) {
//     if (number % i === 0) {
//         console.log(number / i);
//     }
// }


/* Define the number of digits in a requested number and display it. 
For example, there are 4 digits in the number 6834. */

// let number = prompt("Write a number");
// let digits = 0;
// for  (let i = 0; i < number.length; i++) {
//     digits += 1;
// }
// console.log(digits);

// alternative

// let number = prompt("Write a number")
// let digits = number.length;

// console.log(digits);




/* Loop day input like this: «Day of the week. Would you like to see the 
next one?» which continues as long as the user clicks OK. */

let today = prompt("What day is it?");
let todayLow = today.toLowerCase();

do {
    if (todayLow == "monday") {
        let box = confirm('Monday. Would you like to see the next one?');
        if (box == true) {
            todayLow = "tuesday";
        } else {
            todayLow = x;
        }
    }
    if (todayLow == "tuesday") {
        let box = confirm('Tuesday. Would you like to see the next one?');
        if (box == true) {
            todayLow = "wednesday";
        } else {
            todayLow = x;
        }
    }
    if (todayLow == "wednesday") {
        let box = confirm('Wednesday. Would you like to see the next one?');
        if (box == true) {
            todayLow = "thursday";
        } else {
            todayLow = x;
        }
    }
    if (todayLow == "thursday") {
        let box = confirm('Thursday. Would you like to see the next one?');
        if (box == true) {
            todayLow = "friday";
        } else {
            todayLow = x;
        }
    }
    if (todayLow == "friday") {
        let box = confirm('Friday. Would you like to see the next one?');
        if (box == true) {
            todayLow = "saturday";
        } else {
            todayLow = x;
        }
    }
    if (todayLow == "saturday") {
        let box = confirm('Saturday. Would you like to see the next one?');
        if (box == true) {
            todayLow = "sunday";
        } else {
            todayLow = x;
        }
    }
    if (todayLow == "sunday") {
        let box = confirm('Sunday. Would you like to see the next one?');
        if (box == true) {
            todayLow = "monday";
        } else {
            todayLow = x;
        }
    }
} while (todayLow == "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday");


/* Display the multiplication table of all numbers from 2 to 9. 
Every number has to be multiplied by 1 to 10. (Here you should use 
nested loops - for-loop inside another for-loop) */

// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i * j);
//     }
// }




