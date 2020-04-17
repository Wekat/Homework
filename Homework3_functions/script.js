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

// function troll (string) {
//     let newString = string;

//     newString = newString.replace(/a/ig,'');

//     newString = newString.replace(/e/ig,'');

//     newString = newString.replace(/i/ig,'');

//     newString = newString.replace(/o/ig,'');

//     newString = newString.replace(/u/ig,'');
        
//     return newString;
// }

// console.log(troll('This website is for losers LOL!'));

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

// function repeatString (string, number) {
//     let newString = string.repeat(number);
//     return newString;
// }

// console.log(repeatString("Hello", 5));



//EXTRA

/* Write a function that accepts time (hours, minutes, seconds) 
and returns a string in the format hh:mm:ss. If the seconds are not given, 
they should be displayed as 00. */

// function time (hour,min,sec) {
//     if (sec == 0) {
//         sec = 00;
//     }
//     return `${hour}:${min}:${sec}`
// }

// console.log(time(10,50,44));



/* (I gave this one during the classwork but you should use this function in 
the 4th exercise) Write a function that accepts hours, minutes, and seconds 
and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds
returns 5143 seconds. */

function timeToSec (hour, min, sec) {
    return hour * 60 * 60 + min * 60 + sec;
}

console.log(timeToSec(1,25,43));


/* Write a function that accepts the number of seconds, translates it into hours, 
minutes, and seconds, and returns as a hh:mm:ss string. */

function timeFromSec (seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds / 60) % 60;
    // let sec = seconds - (hour * 3600) - (min * 60);
    let sec = Math.floor(seconds) % 60;

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }

    return `${hour}:${min}:${sec}`
}

console.log(timeFromSec(5000));


/* Write a function that counts the difference between the dates. 
The function accepts 6 parameters that describe 2 dates (hours, minutes, 
and seconds for each one), and returns them as hh:mm:ss. While solving 
this problem use the functions from the two previous ones: at first, make 
the dates in seconds, count the difference in seconds, and translate it 
back into hh:mm:ss. */

function timeDiff (hh1,mm1,ss1,hh2,mm2,ss2) {
    
    let time1Sec = timeToSec(hh1,mm1,ss1);
    let time2Sec = timeToSec(hh2,mm2,ss2);
    let timeDiffSec = time2Sec - time1Sec;
    let timeDiffHours = timeFromSec(timeDiffSec);

    return timeDiffHours
}

console.log(timeDiff(2,00,00,5,30,00));