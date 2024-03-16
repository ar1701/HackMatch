// profile_link.js

document.addEventListener("DOMContentLoaded", function() {
    const linksForm = document.getElementById('links-form');
    const linksContainer = document.getElementById('links-container');

    // Function to handle adding new link input
    function addLinkInput() {
        const newLinkInput = document.createElement('div');
        newLinkInput.classList.add('link-input');
        newLinkInput.innerHTML = `
            <input type="text" name="link[]">
            <select name="social-option">
            <option value="Linkedln">Linkedln</option>

                <option value="GitHub">GitHub</option>
                <option value="Twitter">Twitter</option>
                <option value="YouTube">YouTube</option>
            </select>
            <button type="button" class="add-btn">Add</button> <!-- Add button -->
        `;
        linksContainer.appendChild(newLinkInput);

        const addBtns = document.querySelectorAll('.add-btn');
        addBtns.forEach(btn => {
            btn.addEventListener('click', addLinkInput);
        });
    }

    // Event listener for initial "Add" button
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
        // Here you can do something with the links, like send them to a server
    });
});
