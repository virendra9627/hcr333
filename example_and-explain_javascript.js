// JavaScript function to greet user
function greetUser() {
    // Getting the value entered by the user in the input field
    var name = document.getElementById("name").value;
    
    // If the user enters a name, display a personalized greeting
    if (name) {
        document.getElementById("output").innerHTML = "Hello, " + name + "! Welcome to learning JavaScript!";
    } else {
        document.getElementById("output").innerHTML = "Please enter your name!";
    }
}
