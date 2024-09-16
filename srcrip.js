document.getElementById('fileUploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('gameFile');
    const file = fileInput.files[0];
    
    if (file) {
        alert('Game file uploaded successfully: ' + file.name);
    } else {
        alert('Please select a file to upload.');
    }
});

document.getElementById('imageUploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('gameImage');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgElement = document.createElement('img');
            imgElement.src = event.target.result;
            document.getElementById('gallery').appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select an image to upload.');
    }
});
