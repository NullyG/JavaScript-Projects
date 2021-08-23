function type_of() {
document.write(typeof 3);
}
function type_Coercion() {
document.write("10" + 5);
}
function big_Number(){
document.getElementById("Number").innerHTML(3E310);
}
document.write(10 < 2);
document.write(10 > 2);
console.log(2 + 2 == 5);
document.write(10 == 10);
X = 82;
Y = 82;
document.write(X === Y);
Y = "82";
document.write(X === Y);
Y = "83";
document.write(X === Y);
Y = 83;
document.write(X === Y);

document.write(5>10 || 4 > 10);

document.write(5>10 || 10 > 4);

function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}

function not_Function_2() {
    document.getElementById("Not_2").innerHTML = ! (5 > 10);
}