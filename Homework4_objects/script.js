/* Create an object that describes a car (manufacturer, model, year of release, average speed) 
and the following methods of this object: 1) A method that displays the car info; 
2) A method for counting a time frame necessary to cover a given distance with the 
average speed (object methods can also accept parameters as regular functions). 
Note that every 4 hours the driver has to take a 1-hour break. */

let car = {
    manufacturer: 'Volvo',
    model: 'XC90',
    'year of release': '2018',
    'average speed': 100,
    'car info': function() {
        console.log(`${this.manufacturer}, ${this.model} of ${this["year of release"]} with an average speed of ${this["average speed"]}km/h.`)
    },
    timeForTravel: function (distance) {
        let time = distance / this["average speed"];
        let timeWithBreak = time;

        if (time > 4) {
            timeWithBreak = Math.floor(time / 4) + time;
        };

        console.log(timeWithBreak);
    }
    /* Alternative function
    function (distance) {
        let time = distance / this["average speed"];
        let timeWithBreak = Math.floor(time / 4) + time
    if (time%4 === 0) {
             timeWithBreak -= 1;
        }
        console.log(timeWithBreak);
    }*/
};

// 1) A method that displays the car info;

car['car info']();

/* 2) A method for counting a time frame necessary to cover a given distance with the 
average speed (object methods can also accept parameters as regular functions). 
Note that every 4 hours the driver has to take a 1-hour break. */

car.timeForTravel(400);


/* And the tricky one. Create an object that describes time (hours, minutes, seconds) 
and the following methods for if this object: 1) A method for displaying the time in format hh:mm:ss; 
2) A method for changing the time by a given amount of seconds; 3) A method for changing the time by 
a given amount of minutes; 4) A method for changing the time by a given amount of hours. 
Note that in the last three methods changing one part may influence another. For example, 
if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75». */

time = {
    hours: 5,
    minutes: 20,
    seconds: 15,
    'hh:mm:ss': function() {
        let hh = this.hours < 10 ? '0' + this.hours : this.hours;
        let mm = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        let ss = this.seconds < 10 ? '0' + this.seconds : this.seconds;

        return `${hh}:${mm}:${ss}`;
    },
    changeSeconds: function(seconds) {
        let newSec = (Math.floor(seconds) % 60) + this.seconds;
        let newMin = (Math.floor(seconds / 60) % 60) + this.minutes;
        let newHour = Math.floor(seconds / 3600) + this.hours;

        let hh = newHour < 10 ? '0' + newHour : newHour;
        let mm = newMin < 10 ? '0' + newMin : newMin;
        let ss = newSec < 10 ? '0' + newSec : newSec;

        this.hours = newHour;
        this.minutes = newMin;
        this.seconds = newSec;

        //return `${hh}:${mm}:${ss}`;
    },
    changeMinutes: function(minutes) {
        let newMin = (Math.floor(minutes) % 60) + this.minutes;
        let newHour = Math.floor(minutes / 60) + this.hours;

        let hh = newHour < 10 ? '0' + newHour : newHour;
        let mm = newMin < 10 ? '0' + newMin : newMin;
        let ss = this.seconds < 10 ? '0' + this.seconds : this.seconds;

        this.hours = newHour;
        this.minutes = newMin;

        //return `${hh}:${mm}:${ss}`;
    },
    changeHours: function(hours) {
        let newHour = hours + this.hours;

        let hh = newHour < 10 ? '0' + newHour : newHour;
        let mm = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        let ss = this.seconds < 10 ? '0' + this.seconds : this.seconds;

        this.hours = newHour;

        //return `${hh}:${mm}:${ss}`; 
    }

}

// 1) A method for displaying the time in format hh:mm:ss;

console.log(time["hh:mm:ss"]());

// 2) A method for changing the time by a given amount of seconds;

time.changeSeconds(30);
console.log(time);

// 3) A method for changing the time by a given amount of minutes;

time.changeMinutes(75);
console.log(time);

// 4) A method for changing the time by a given amount of hours.

time.changeHours(7);
console.log(time);