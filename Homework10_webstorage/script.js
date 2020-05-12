/* Create a task list using the local storage. On the page a user should see an input form and a button. 
After the user types a task description in the input and clicks on the button, the task has to be added 
to the local storage and also displayed on the page. After the user reloads the page, all the saved 
tasks have to be displayed on the page.
Store the task list as a stringified array. You can use jQuery to simplify DOM manipulations. */


let button = $('#btn'); //let button = document.getElementById('btn');
let inputField = $('#input-field'); //let inputField = document.getElementById('input-field');
let clearButton = $('#clearBtn');
//let storage = window.localStorage.getItem('task'); //not json is used you can do it like this
let storage = window.localStorage.getItem('json');

if (storage == null) {
    storage = []; //set storage to an array
} else {
    // storage = storage.split(','); //to be used if json not used
    storage = JSON.parse(window.localStorage.getItem('json')); //makes an array out of all items in storage splited so that they do not come up on same line
};

populateList();

inputField.focus(); //focus on the input field
button.click (handleInput); //onclick calls for handleInput jquery method

inputField.keypress((event) => { //jquery method for onkeypress to be added as an option to add thing to list also calls for handleInput
    console.log(event);
    if (event.key == "Enter") {
        handleInput();
    }
});

function handleInput () { //what happens on onclick and on keypress. Before this was just button.onclick () => {}

    let newTask = inputField.val(); //getting the input value for new task
    inputField.val("");
    
    storage.push(newTask); //adding newTask to storage array
    console.log(storage);

    window.localStorage.setItem('task', storage); //update storage with new added task
    window.localStorage.setItem('json', JSON.stringify(storage)); //update storage with new added task but in json
    populateList ();

    inputField.focus();
}

function populateList () {
    $('#taskList').empty(); //empty task list before making new
    for (i = 0; i < storage.length; i++) { //loop through storage array to create list
        let taskList = $('<ul></ul>');
        taskList.append(`
        <li>${storage[i]}</li>
        `);
        $('#taskList').append(taskList);
    }
}

clearButton.click (clear); //calls the function clear

function clear () { //this function will clear the storage and reload the page to clear list from page
    console.log(5);
    window.localStorage.clear();
    location.reload();
}