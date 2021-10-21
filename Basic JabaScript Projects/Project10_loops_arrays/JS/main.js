function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black", price: "$700"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var Y = 12;
document.write(Y);
{
    let Y = 24;
    document.write("<br>" + Y);
}
document.write("<br>" + Y);

function myFunction() {
    return Math.PI;
}

document.getElementById("demo").innerHTML = myFunction();

let car = {
    make: "Dodge",
    model: "Viper ",
    year: "2021",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}

document.getElementById("bs").innerHTML = text;