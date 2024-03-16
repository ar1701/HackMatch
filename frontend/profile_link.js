document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.querySelector('.submit-btn');

    // Event listener for form submission
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const links = document.querySelectorAll('input[name="link[]"]');
        const skills = document.querySelectorAll('input[name="skill[]"]');
        
        const linkData = Array.from(links).map(link => link.value);
        const skillData = Array.from(skills).map(skill => skill.value);
        
        console.log('Social Media Links:', linkData);
        console.log('Skills:', skillData);
        
        // Here you can do something with the links and skills, like send them to a server
    });
});
