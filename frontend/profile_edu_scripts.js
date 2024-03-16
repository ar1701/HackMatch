
document.addEventListener("DOMContentLoaded", function() {
    const educationForm = document.querySelector('#education form');

    educationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Education form submitted');
    });
});
