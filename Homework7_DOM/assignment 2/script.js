/* 2. Create an HTML page with OPEN button and a modal box. 
The modal box should have text and a CLOSE button. The modal box is not displayed from the beginning. 
It appears when clicking the OPEN button and disappears when clicking CLOSE. */

// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById('myBtn');

// Get the button element that closes the modal
let closeBtn = document.getElementById('closeBtn');

// When the user clicks the button, open the modal 
btn.onclick = displayModal;

function displayModal() {
  modal.style.display = "block";
}

// When the user clicks on close button, close the modal. Also another way of writing the above event that could be written in the same way as this.
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}