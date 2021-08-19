var A = 4, B = 6 //initializes the A and B variables
function myFunction(p1, p2) {
    return A * B; //multiplies variables A and B together and returns them to the document
}
document.getElementById("demo").innerHTML = myFunction(4, 3); //specifies the element to modify

function myFunction2() {
    var sentence = "I am learning"; //creates a veriable for the text displayed in the "p" element
    sentence += " a lot from this book!"; //concatenates the text with the rest of the variable for "p" element
    document.getElementById("Concatenate").innerHTML = sentence; //specifies the "p" element to be modified
}

function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2+2 = " + addition;
}