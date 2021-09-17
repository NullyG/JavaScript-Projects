function Add_numbers() {
    var X = 10;
    document.write(20 + X + "<br>");
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Answer() {
    if (10 < 12) {
        document.getElementById("Answer").innerHTML = "10 is less than 12";
    }
    else {
        document.getElementById("Answer").innerHTML = "10 is greater than 12";
    }
}

function no_Life() {
    Hours = document.getElementById("Hours").value;
    if (Hours < 100) {
        document.getElementById("No_Life").innerHTML = "Congratulations you made it out of a crappy game"
    }
    else {
        document.getElementById("No_Life").innerHTML = "What are you doing still playing that game?"
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time > 0) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}