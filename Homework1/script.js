/*Request a length of a side of a square from a user and display 
the perimeter of the square in the console.*/

// let length = prompt('Length of square side');
// console.log(length * 4);

/*Request a user’s year of birth, count their age, and display 
the result to the console. Store the current year as a constant.*/

let yob = prompt('Insert year of birth');
const age = 2020 - yob;
console.log(age);

/*Request a distance in kilometers between the two cities from a user, 
and the time they want to cover it within. Count the speed needed to be on time.*/

// let distance = prompt("Distance between A and B in km?");
// let time = prompt("How long time to travel in hours?")
// let result = distance / time;
// alert("You need to drive " + result +"km/h");

/*Create a simple currency converter. A user types in USD and the program converts them to EUR. 
The exchange rate should be stored as a constant. Then display the result in the console.*/

// let USD = prompt("USD to EUR");
// const rate = 0.92;
// console.log(USD * rate);

/*A user types in the values of a and b for the formula a * x + b = 0 . 
The program has to calculate the x and display it in the console.*/

// let a = +prompt("Enter a number");
// let b = +prompt("Enter another number");
// console.log(-b / a);

/*Request current time from a user in format HH:mm (HH is hour in a day from 00 to 23, 
mm are minutes in hour) and display how many hours and minutes are left until tomorrow.*/

// let time = prompt("Inser current time in HH:mm");
// let hours = +time.split(":")[0];
// let minutes = +time.split(":")[1];
// alert("Time left of today: " + (23 - hours) + " hours and " + (60 - minutes) + " minutes");