/* Create a task list using the local storage. On the page a user should see an input form and a button. 
After the user types a task description in the input and clicks on the button, the task has to be added 
to the local storage and also displayed on the page. After the user reloads the page, all the saved 
tasks have to be displayed on the page.
Store the task list as a stringified array. You can use jQuery to simplify DOM manipulations. */


let button = document.getElementById('btn');


button.onclick = () => {
    let newTask = document.getElementById('input-field').value; //getting the input value for new task
    let storage = window.localStorage.getItem('task');

    if (storage == null) {
        storage = []; //set storage to an array
    } else {
        storage = [storage]
    };

    storage.push(newTask); //adding newTask to storage array
    console.log(storage);

    window.localStorage.setItem('task', storage); //update storage with new added task

    $('#taskList').empty(); //empty task list before making new
    for (i = 0; i < storage.length; i++) { //loop through storage array to create list
        let taskList = $('<ul></ul>');
        taskList.append(`
        <li>${storage[i]}</li>
        `);
        $('#taskList').append(taskList);
    }
}