function full_Sentence() {
    var part_1 = "I have "; //Initializes variable "part_1"
    var part_2 = "made this "; //Initializes variable "part_2"
    var part_3 = "into a complete "; //Initializes variable "part_3"
    var part_4 = "senctence."; //Initializes variable "part_4"
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Initializes variable whole_sentence and conctenates the previous variables
    document.getElementById("Concatenate").innerHTML = whole_sentence; //Changes the value of "Conctenate" in the HTML document to whole_sentence

}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy."; //Initializes variable "Sentence"
    var Section = Sentence.slice(27,33); //Initializes variable "Section"
    document.getElementById("Slice").innerHTML = Section; //Changes value of "Slice" to var Section
}

function upper_Case() {
    let str = "Hello World!"; //Declares let "str"
    document.getElementById("Upper_Case").innerHTML = str.toUpperCase() // Returns "HELLO WORLD!"
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
function fixed_Method() {
var num = 5.56789;
var n = num.toFixed(2);
document.getElementById("Fixed").innerHTML = n
}

function value_Method() {
    let str = "Hello World!";
    
    document.getElementById("Value").innerHTML = str.valueOf() //Returns "Hello World!"
}