/* Create a function that takes an integer number as an argument and returns 
“Even” for even numbers or “Odd” for odd numbers. */

// function evenOrOdd (number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(evenOrOdd(99));

/* Trolls are attacking your comment section! Create a function that takes a string 
and returns a new string with all vowels removed. For example, “This website is for 
losers LOL!” returns “Ths wbst s fr lsrs LL!“. */

// function troll (string) {
//     let newString = string;

//     for (let i = 0; i <= string.length; i++) {
//         if (string[i] == 'a') {
//             newString = newString.replace(/a/ig,'');
//         } else if (string[i] == 'e') {
//             newString = newString.replace(/e/ig,'');
//         } else if (string[i] == 'i') {
//             newString = newString.replace(/i/ig,'');
//         } else if (string[i] == 'o') {
//             newString = newString.replace(/o/ig,'');
//         } else if (string[i] == 'u') {
//             newString = newString.replace(/u/ig,'');
//         }
//     }
//     return newString;
// }

// console.log(troll('This website is for losers LOL!'));

//else if not necessary

function troll (string) {
    let newString = string;

    newString = newString.replace(/a/ig,'');

    newString = newString.replace(/e/ig,'');

    newString = newString.replace(/i/ig,'');

    newString = newString.replace(/o/ig,'');

    newString = newString.replace(/u/ig,'');
        
    return newString;
}

console.log(troll('This website is for losers LOL!'));

/* Write a function which repeats the given string exact number of times. For example, 
repeatString("Hello", 5) returns “HelloHelloHelloHelloHello”. */

// Alternative with for loop but shorter alt below.

// function repeatString (string, number) {
//     let newString = string

//     for (i = 1; i < number; i++) {
//         newString = newString + string;
//     }

//     return newString;
// }

// console.log(repeatString("Hello", 5));

function repeatString (string, number) {
    let newString = string.repeat(number);
    return newString;
}

console.log(repeatString("Hello", 5));