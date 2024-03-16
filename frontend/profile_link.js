// profile_link.js

document.addEventListener("DOMContentLoaded", function() {
    const linksForm = document.getElementById('links-form');
    const linksContainer = document.getElementById('links-container');

    // Function to handle adding new link input
    function addLinkInput() {
        const newLinkInput = document.createElement('div');
        newLinkInput.classList.add('link-input');
        newLinkInput.innerHTML = `
        <form id="links-form">
            <input type="text" name="link[]">
            <select name="social-option">
            <option value="Linkedln">Linkedln</option>

                <option value="GitHub">GitHub</option>
                <option value="Twitter">Twitter</option>
                <option value="YouTube">YouTube</option>
            </select>
            <button type="button" class="add-btn">Add</button> <!-- Add button -->
            </form>
        `;
        linksContainer.appendChild(newLinkInput);

        const addBtns = document.querySelectorAll('.add-btn');
        addBtns.forEach(btn => {
            btn.addEventListener('click', addLinkInput);
        });
    }

    
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', addLinkInput);

    // Event listener for form submission
    linksForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const links = document.querySelectorAll('input[name="link[]"]');
        const socialOptions = document.querySelectorAll('select[name="social-option"]');
        const linkData = Array.from(links).map((link, index) => ({
            link: link.value,
            social: socialOptions[index].value
        }));
        console.log('Links:', linkData);
        let item;
        for (const key in linkData) {
            if (Object.hasOwnProperty.call(linkData, key)) {
                item = linkData[key];
                
                console.log(item.link); // Accessing link property of each item
                console.log(item.social); // Accessing social property of each item
            }
        }
        // Here you can do something with the links, like send them to a server
    });
});


const skillsForm = document.getElementById('skills-form');
    const skillsContainer = document.getElementById('skills-container');
    const addSkillBtn = document.querySelector('.add-skill-btn');

    addSkillBtn.addEventListener('click', function() {
        const skillInput = document.createElement('div');
        skillInput.classList.add('skill-input');
        skillInput.innerHTML = `
            <input type="text" name="skill[]">
            <button type="button" class="remove-btn">Remove</button>
        `;
        skillsContainer.appendChild(skillInput);
    });

    skillsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            e.target.parentElement.remove();
        }
    });
