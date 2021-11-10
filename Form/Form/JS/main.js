function validateForm() {
    let x = document.forms["myForm"]["pnumber"].value;
    if (x == "") {
        alert("Name and phone number must be filled out");
        return false;
    }
}