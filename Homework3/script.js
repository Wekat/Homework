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

function troll (string) {
    let newString = string;

    for (let i = 0; i <= string.length; i++) {
        if (string[i] == 'a') {
            newString.replace('a','');
        } else if (string[i] == 'e') {
            newString.replace('e','');
        } else if (string[i] == 'i') {
            newString.replace('o','');
        } else if (string[i] == 'o') {
            newString.replace('o','');
        } else if (string[i] == 'u') {
            newString.replace('u','');
        }
    }
    return newString;
}

console.log(troll('This website is for losers LOL!'));

/* Write a function which repeats the given string exact number of times. For example, 
repeatString("Hello", 5) returns “HelloHelloHelloHelloHello”. */

function repeatString (string, number) {
    let newString = string

    for (i = 1; i < number; i++) {
        newString + string == newString;
    }

    return newString;
}

console.log(repeatString("Hello", 5));