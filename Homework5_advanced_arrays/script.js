/* Create a “groceries list” array. Each element of the array is an object that contains the name 
of a product, an amount needed and a property saying whether it is bought or not. 
Write a few functions for working with this array: 
1) Function for displaying the entire list; 
2) Function for adding a purchase to the list. 
Note that if a product already exists in the array, the amount needs to be increased in the 
existing purchase, not in a new one; 
3) Function for purchasing a product. The function accepts the name of a product and marks it as bought. */

groceriesList = [
    {
    name: 'Tomatos',
    amount: 5,
    bought: true,
    },
    {
    name: 'Onion',
    amount: 10,
    bought: true,
    },
    {
    name: 'Paper',
    amount: 56,
    bought: false,
    },
    {
    name: 'Milk',
    amount: 2,
    bought: false,
    },
    {
    name: 'Juice',
    amount: 1,
    bought: true,
    }
];

// 1) Function for displaying the entire list;

// let displayList = groceriesList.map(function(item) {
//     let myList = {};
//     myList = item;
//     console.log(myList);
// });

// displayList;

/* 2) Function for adding a purchase to the list. 
Note that if a product already exists in the array, the amount needs to be increased in the 
existing purchase, not in a new one; */

// This first alternative gives a strange AddItem note to the new item in the array..why?

// function AddItem(name, amount, bought) {
//     this.name = name;
//     this.amount = amount;
//     this.bought = bought;
// };

// let newListItem = new AddItem('apple', 3, false);
// console.log(newListItem);

// function newList (newListItem) {
//     for(let i = 0; i < groceriesList.length; i++) {
//         if (newListItem.name == groceriesList[i].name) {
//             groceriesList[i].amount += newListItem.amount;
//             return groceriesList;
//         } else {
//             return groceriesList.push(newListItem);
//         }
//     }
// };

// newList(newListItem);

// console.log(groceriesList);

const newItem = { //the new object to be added to list
    name: 'Milk',
    amount: 3,
    bought: false
};

function newList(newItem) {
    for (const item of groceriesList) { //for of loop to go through groceriesList
      if (item.name === newItem.name) {
        if (item.bought === true) {     
          item.amount = newItem.amount;
          item.bought = false;
        } else {        
          item.amount += newItem.amount;
        }
        return groceriesList; //have return outside loop so that it does not stop
      }
    }
    groceriesList.push(newItem);
    return groceriesList;
};

newList(newItem);

console.log(groceriesList);


/* Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) 
and the faculty it is meant for. Write a few functions for working with it: 
1) Display all the classrooms; 
2) Display all the classrooms for a given faculty; 
3) Display only the classrooms that would fit a given group. 
A group object contains a name, the number of students, and the faculty name. */

let classroomArray = [
    {
        name: 'Alpha',
        seats: 10,
        faculty: 'History'
    },    
    {
        name: 'Beta',
        seats: 14,
        faculty: 'Economics'
    },    
    {
        name: 'Gamma',
        seats: 18,
        faculty: 'Technology'
    },    
    {
        name: 'Delta',
        seats: 20,
        faculty: 'History'
    },
];

// 1) Display all the classrooms;

let classroomList = classroomArray.map(function(item) {
    let list = item;
    return list;
});

console.log(classroomList);

// 2) Display all the classrooms for a given faculty;

let facultyRooms = classroomArray.filter(function(item) {
    return item.faculty == 'History'; 
})

console.log (facultyRooms);

/* 3) Display only the classrooms that would fit a given group. 
A group object contains a name, the number of students, and the faculty name. */

function Group(name, numOfStudents, faculty) {
    this.name = name;
    this['number of students'] = numOfStudents;
    this.faculty = faculty;
}

let givenGroup = new Group('the Group', 12, 'Economics');
// console.log(givenGroup);

let appropriateRooms = classroomArray.filter(function(item) {
    return item.seats >= givenGroup['number of students'] && item.faculty == givenGroup.faculty;
})

console.log(appropriateRooms);