// JavaScript to show alert when an exercise link is clicked
const exerciseLinks = document.querySelectorAll('.exercise a');

exerciseLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of link
        alert("You are starting the exercise: " + link.previousElementSibling.previousElementSibling.innerText);
    });
});
