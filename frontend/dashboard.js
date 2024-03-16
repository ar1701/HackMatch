document.addEventListener("DOMContentLoaded", function() {
    const sendNotificationForm = document.getElementById('send-notification-form');
    const receivedNotificationList = document.getElementById('received-notification-list');
    const techStackForm = document.getElementById('tech-stack-form');
    const techStackList = document.getElementById('tech-stack-list');


    techStackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const techStackInput = document.getElementById('tech-stack-input').value;
        if (techStackInput.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = techStackInput;
            techStackList.appendChild(li);
            // Clear input after adding tech stack
            document.getElementById('tech-stack-input').value = '';
        }
    });
});
