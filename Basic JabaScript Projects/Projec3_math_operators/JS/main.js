function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2+2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math_1").innerHTML = " 5-2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math_2").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48/6;
    document.getElementById("Math_3").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math_4").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById ("Math_5").innerHTML = "When you divide 26 by 6 you have a remainder of: " + simple_Math
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math_6").innerHTML = -x;
}
function increment() {
    var A = 5;
    A++;
    document.getElementById ("Math_7").innerHTML = (A);
}

function decrement() {
    var X = 5.25;
    X--;
    document.getElementById ("Math_8").innerHTML = (X);
}

function square_Root() {
    var square = Math.sqrt(9);
    document.getElementById ("Math_9").innerHTML = (square);
}

window.alert(Math.random());

window.alert(Math.random() * 100);