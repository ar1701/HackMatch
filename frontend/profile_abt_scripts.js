

document.addEventListener("DOMContentLoaded", function() {
    const subNavLinks = document.querySelectorAll('.sub-nav-link');
    const sections = document.querySelectorAll('.section');

    sections[0].classList.add('active');

    function toggleActiveLink() {
        subNavLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    }

    function showSection(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
    }

  
    subNavLinks.forEach(link => {
        link.addEventListener('click', toggleActiveLink);
        link.addEventListener('click', showSection);
    });
});
