/* Create a task list using the local storage. On the page a user should see an input form and a button. After the user types a task description in the input and clicks on the button, the task has to be added to the local storage and also displayed on the page. After the user reloads the page, all the saved tasks have to be displayed on the page.
Store the task list as a stringified array. You can use jQuery to simplify DOM manipulations. */

let newTask = document.getElementById('input-field').value; //getting the input value for new task
let button = document.getElementsByClassName('btn');

button.onclick = () =>
    window.localStorage.setItem('task', 'newTask');
    console.log(localStorage.getItem('task'));

    // let taskList = $('<ul></ul>');
    // taskList.append(`
    // <li>${localStorage.getItem('task')}</li>
    // `);
    // $('#taskList').append(taskList);
