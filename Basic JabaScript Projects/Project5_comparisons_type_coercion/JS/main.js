function type_of() {
document.write(typeof 3);
}
function type_Coercion() {
document.write("10" + 5);
}
function big_Number(){
document.getElementById("Number").innerHTML(3E310);
}
document.write(10 < 2); //creates a less than statement that returns false

document.write(10 > 2); //creates a greater than statement that returns true

console.log(2 + 2 == 5); //creates an equal statement that returns false

document.write(10 == 10); //creates an equal statement that returns true
X = 82;

Y = 82;
document.write(X === Y);
Y = "82";

document.write(X === Y);
Y = "83";

document.write(X === Y);
Y = 83; 

document.write(X === Y); 

document.write(5>10 || 4 > 10); //creates an or statement that returns false

document.write(5>10 || 10 > 4); //creates an or statement that returns true

function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10); //creates a not function that returns false
}

function not_Function_2() {
    document.getElementById("Not_2").innerHTML = ! (5 > 10); //creates a not function that returns true
}