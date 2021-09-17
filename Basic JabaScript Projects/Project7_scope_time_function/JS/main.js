var X = 10; //Creates a variable called X with a value of 10

function Add_numbers() { //Creates a function called Add_numbers
    document.write(20 + X + "<br>"); // writes the variable to the HTML document
}

function get_Date() { //Creates a function called get_Date
    if (new Date().gethours() < 18) { //Establishes a condition to perform an action if the time is less than 18:00
        document.getElementById("Greeting").innerHTML = "How are you today?"; //Sets the value of the element "Greeting" to "How are you today?" if the conditional statement is met
    }
}

function get_Answer() { //Creates a function called get_Answer
    if (10 < 12) { //Establishes a condition to perform an action if 10 is less than 12
        document.getElementById("Answer").innerHTML = "10 is less than 12"; //Sets the value of "Answer" to "10 is less than 12" if the conditional statement above is met
    }
    else { //Establishes an alternate condition to perform an action
        document.getElementById("Answer").innerHTML = "10 is greater than 12"; //Sets the value of "Answer" to "10 is greater than 12" if the alternate condition is met
    }
}

function no_Life() { //Creates a function called no_Life
    Hours = document.getElementById("Hours").value; //gets the value containes in the "Hours" element in the HTML document and sets a variable called "Hours" to that value
    if (Hours < 100) { //Sets a conditional statement to perform an action if the Hours variable value is less than 100
        document.getElementById("No_Life").innerHTML = "Congratulations you made it out of a crappy game" //Sets the value of No_Life element in the HTML document to "Congratulations you made it out of a crappy game" if the condition above is met
    }
    else { //Sets an alternate condition to perform an action
        document.getElementById("No_Life").innerHTML = "What are you doing still playing that game?" //Sets the value of No_Life element in the HTML document to "What are you doing still playing a crappy game" if the alternate condition is met
    }
}

function Time_function() { //Creates a function called Time_function
    var Time = new Date().getHours(); //Sets a variable called Time to current date and time
    var Reply; //Establishes a variable for a reply
    if (Time < 12 == Time > 0) { //Sets a conditional statment to perform an action if the Time variable is greater than or equal to 12 and greater than 0
        Reply = "It is morning time!"; //Sets the value of Reply to "It is morning time!" if the condition above is met
    }
    else if (Time >= 12 == Time > 0) { //Sets another condition to be met for an action to be performed
        Reply = "It is afternoon."; //Sets the value of Reply if the condition above is met
    }
    else { //Sets a final action to be taken if the other conditions are not met
        Reply = "It is evening time."; //Sets the value of Reply to "It is evening time." if none of the other conditions are met
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //Sets the value of the "Time_of_day" element in the HTML document to Reply
}
console.log(errorVar1)