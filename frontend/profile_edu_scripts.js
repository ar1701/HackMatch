
document.addEventListener("DOMContentLoaded", function() {
    const educationForm = document.querySelector('#education form');

    educationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(' form submitted');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const subNavLinks = document.querySelectorAll('.sub-nav-link');

    subNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            subNavLinks.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});