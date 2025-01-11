// JavaScript to show alert when a tutorial link is clicked
const tutorialLinks = document.querySelectorAll('.tutorial-category a');

tutorialLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        alert("You have selected: " + link.innerText);
    });
});
