/* 3. Create an HTML page with traffic lights and a button that switches the color to the next one. */

let btn = document.getElementById('myBtn');

btn.addEventListener('click', changeColor);

let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');

function changeColor () {

    if (red.classList.contains('red')) {
        red.classList.add('grey');
        red.classList.remove('red');
        yellow.classList.add('yellow');
        yellow.classList.remove('grey');
    };
    if (yellow.classList.contains('yellow')) {
        yellow.classList.add('grey');
        yellow.classList.remove('yellow');
        green.classList.add('green');
    };
    if (green.classList.contains('green')) {
        green.classList.add('grey');
        green.classList.remove('green');
        red.classList.add('red');
    };
};