

document.addEventListener("DOMContentLoaded", function() {
    const addStackButton = document.getElementById('add-stack');
    const stacksContainer = document.getElementById('stacks-container');

    addStackButton.addEventListener('click', function() {
        const stackInput = document.createElement('input');
        stackInput.type = 'text';
        stackInput.name = 'stack[]';
        stackInput.classList.add('stack-input');
        stackInput.placeholder = 'Enter stack';
        stacksContainer.appendChild(stackInput);
        stacksContainer.appendChild(document.createElement('br'));
    });
});

