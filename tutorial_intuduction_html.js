function previewHTML() {
    var userInput = document.getElementById("htmlInput").value;
    var outputArea = document.getElementById("htmlOutput");
    
    // Display the user input as HTML in the output section
    outputArea.innerHTML = userInput;
}
