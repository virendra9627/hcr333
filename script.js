// Example of a simple JavaScript function to alert when a course is clicked.
document.querySelectorAll('.course a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        alert('You will be redirected to the course page soon!');
    });
});
