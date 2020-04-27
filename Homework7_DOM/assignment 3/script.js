/* 3. Create an HTML page with traffic lights and a button that switches the color to the next one. */

let btn = document.getElementById('myBtn');

//alt1

// btn.addEventListener('click', changeColor);

// let red = document.getElementById('red');
// let yellow = document.getElementById('yellow');
// let green = document.getElementById('green');

// function changeColor () {

//     if (red.classList.contains('active')) {
//         red.classList.remove('active');
//         yellow.classList.add('active');
//     }
//     else if (yellow.classList.contains('active')) {
//         yellow.classList.remove('active');
//         green.classList.add('active');
//     }
//     else if (green.classList.contains('active')) {
//         green.classList.remove('active');
//         red.classList.add('active');
//     }
// };

// alt 2

let lights = [document.getElementById('red'), 
document.getElementById('yellow'), 
document.getElementById('green')];

let i = 0;

function changeLights () {
    lights[i].classList.remove('active');
    console.log(i);
    i = (i + 1) % 3;
    console.log(i);
    lights[i].classList.add('active');
}

btn.addEventListener('click', changeLights);

