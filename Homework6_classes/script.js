/* Create a class that describes a regular marker. It should contain the following components: 
A field that stores the color of the marker;
A field that stores the amount of ink in the marker (in percentage);
A method for input. The method takes a string and displays the text in the given color on the webpage. 
The text appears as long as the marker has ink. One non-space character takes 0,5% ink from the marker.
Create a class that describes a refillable marker. The class should inherit from the regular marker. 
Also add a method that refills the marker. Demonstrate the work of these methods. */

class RegularMarker {
    constructor (color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }

    input(stringOfText) {
        this.stringOfText = stringOfText;
        let withoutSpace = this.stringOfText.replace(/\s/g,''); //remove white space from string
        let length = withoutSpace.length; //string length without spaces
        let inkDurability = this.inkAmount / 0.5; //for how many characters the ink lasts
        let wholeStrings = Math.floor(inkDurability / length); //amount of whole strings we can write
        let leftCharacters = inkDurability % length; //amount of single characters left of string when all whole strings have been written
        let newString = this.stringOfText.repeat(wholeStrings) + this.stringOfText.slice(0, leftCharacters); //amount of whole sentences and the left characters (but the left characters might unfortunately include blank space)

        document.write(`<p style="color:${this.color}">${newString}</p>`)
        
    }

    input2(stringOfText) {
        this.stringOfText = stringOfText;
        let newText = '';

        for (let character of stringOfText) {
          if (this.inkAmount === 0) break; // exit the loop if there is no ink
          newText += character; // add character to the new string
          if (character !== ' ') { // decrease the amount of ink for non-space characters
            this.inkAmount -= 0.5;
          }
        }
        document.write(`<p style="color: ${this.color}">${newText}</p>`);
    }

    //This method below did not really work out as I wanted so gave up at the end. If you have any comments feel free to share :)

    // input2 (stringOfText) {
    //     this.stringOfText = stringOfText;
    //     let withoutSpace = this.stringOfText.replace(/\s/g,''); //remove white space from string
    //     let length = withoutSpace.length; //string length without spaces
    //     let inkDurability = this.inkAmount / 0.5; //for how many characters the ink lasts
    //     let i = 0;

    //     while (inkDurability > 0) {

    //         while (i < this.stringOfText.length) { //loop the characters in the string while i is less then the length of the string

    //             if (i < this.stringOfText.length) {
    //                 document.write(`<p style="color:${this.color}, display: inline-block">${this.stringOfText[i]}</p>`); //Write eash character
    //                 if (this.stringOfText[i] !== ' ') {
    //                     inkDurability -= 1;
    //                 };
    //                 i++;
    //             } else {
    //                 i = 0;
    //             };
    //         };
    //     };
    // }
}

class RefillableMarker extends RegularMarker {
    constructor (color, inkAmount) {
        super(color, inkAmount);
    }

    refill(addedAmount) {
        this.addedAmount = addedAmount;

        if (this.inkAmount + this.addedAmount <= 100) {
            this.inkAmount += this.addedAmount;
        } else {
            this.inkAmount = 100;
        };
    }
}

let marker = new RegularMarker('blue', 67);
marker.input('Hello there everyone ');

//marker.input2('This is the second alternative'); //did not work out as planned and gave up.

let newMarker = new RefillableMarker('red', 45);
newMarker.refill(70);

console.log(newMarker);
