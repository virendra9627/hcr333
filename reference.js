// JavaScript function to show an alert when a reference link is clicked
const referenceLinks = document.querySelectorAll('.reference-item a');

referenceLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        alert("You are now visiting: " + link.href);
    });
});
