

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
