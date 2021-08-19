function my_Dictionary() { //Creates a function
    var Animal = { //Creates dictionary
        species:"Dog", 
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!" //specifies characteristics using KVP's
    };
    delete Animal.Sound; //deletes the value for Animal Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //writes value for Animal Sound in html id Dictionary
}