function Call_Loop() { 
    var Digit = ""; //establishes variable digit
    var X = 1;
    while (X < 11) { //establishes loop paramiters
        Digit += "<br>" + X; //Digit becomes digit + X
        X++; //incriments X
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black", price: "$700"}; //Initializes constant Musical_Instrument
    Musical_Instrument.color = "blue"; //sets Musical_Instrument color to blue
    Musical_Instrument.price = "$900"; //sets Musical_Instrument price to $900
    document.getElementById("Constant").innerHTML = "The cost of the " + 
    Musical_Instrument.type + " was " + Musical_Instrument.price; //sets element Constant to The cost of the instrument was $900
}

var Y = 12; //Initializes variable Y
document.write(Y); //prints Y in document
{
    let Y = 24; //sets Y to 24
    document.write("<br>" + Y); //Prints Y
}
document.write("<br>" + Y); //Prints Y

function myFunction() {
    return Math.PI; //Returns PI to function
}

document.getElementById("demo").innerHTML = myFunction(); //prints myFunction to element "demo"

let car = { //Initializes car
    make: "Dodge",
    model: "Viper ",
    year: "2021",
    color: "red ", //sets properties of car
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model; //Returns car's yea color make and model
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); //Sets element Car_Object to the description of the car

let text = "";  //Initializes text
for (let i = 0; i < 10; i++) { //Establishes loop paramiters
    if (i === 3) { break; } //Breaks the loop
    text += "The number is " + i + "<br>";
}

document.getElementById("bs").innerHTML = text; //Prints text to element bs