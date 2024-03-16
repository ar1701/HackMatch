

document.addEventListener("DOMContentLoaded", function() {
    const pdfUploadForm = document.getElementById('pdf-upload-form');
    const pdfFileInput = document.getElementById('pdf-file');

    pdfUploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const file = pdfFileInput.files[0];
        if (file && file.type === 'application/pdf') {
            
            console.log('File uploaded:', file.name);
        } else {
            alert('Please select a PDF file.');
        }
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