/* 1. Create an HTML page that displays an ordered list of tracks to the webpage 
using Document Object Model API. */

let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
];

/* For each item of the array:
Create a new <li>
Create a text node with the text from the array
Append the text to the <li>
Append the <li> to the <ul> */

//alt 1
playList.forEach(function(item) {
    let value = `Author: ${item.author}<br>Song:${item.song}`
    let listItem = document.createElement('li');
    listItem.innerHTML = value;
    document.getElementById('list1').appendChild(listItem);
});

//alt 2
let str = '<ol>'

playList.forEach(function(item) {
  str += `<li>Author: ${item.author}<br>Song:${item.song}</li><br>`;
}); 

str += '</ol>';
document.getElementById("listContainer").innerHTML = str;


