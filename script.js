const urlInput = document.getElementById('urlInput');
const generateBtn = document.getElementById('generateBtn');
const qrContainer = document.getElementById('qrContainer');
const qrCode = document.getElementById('qrCode');
const downloadLink = document.getElementById('downloadLink');

generateBtn.addEventListener('click', generateQRCode);

function generateQRCode() {
    const url = urlInput.value.trim();
    
    if (url === '') {
        alert('Please enter a valid URL');
        return;
    }
    
    // Clear previous QR code
    qrCode.innerHTML = '';
    
    // Generate new QR code
    new QRCode(qrCode, {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#00c6ff",
        colorLight: "#1f1f2f",
        correctLevel: QRCode.CorrectLevel.H
    });
    
    // Show QR code container with animation
    qrContainer.classList.add('show');
    
    // Update download link
    setTimeout(() => {
        const qrImage = qrCode.querySelector('img');
        downloadLink.href = qrImage.src;
    }, 50);
}

urlInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        generateQRCode();
    }
});

// Button animations
generateBtn.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
});

generateBtn.addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
});
