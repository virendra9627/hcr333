// Simple form validation before submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        event.preventDefault(); // Prevent form submission if fields are empty
        alert("Please fill in all fields.");
    } else {
        alert("Your message has been sent successfully!");
    }
});
