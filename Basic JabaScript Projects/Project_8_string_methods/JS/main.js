function full_Sentence() {
    var part_1 = "I have "; //Initializes variable "part_1"
    var part_2 = "made this "; //Initializes variable "part_2"
    var part_3 = "into a complete "; //Initializes variable "part_3"
    var part_4 = "senctence."; //Initializes variable "part_4"
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Initializes variable whole_sentence and conctenates the previous variables
    document.getElementById("Concatenate").innerHTML = whole_sentence; //Changes the value of "Conctenate" in the HTML document to whole_sentence

}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
