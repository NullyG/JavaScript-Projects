function Vote_Function() {
    var age, Can_vote;
    age = document.getElementById("Age").value;
    Can_vote = (age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper",2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model +
    " manufactrued in " + Erick.Vehicle_Year;
}
function Keyword() {
document.getElementById("New_and_This").innerHTML = Erick.Vehicle_Make;
}


function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count()
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}