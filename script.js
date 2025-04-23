// script.js

document.getElementById('goBtn').addEventListener('click', function() {
    let url = document.getElementById('urlInput').value;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url; // Automatically add https:// if the URL doesn't have it
    }
    document.getElementById('webView').src = url; // Load the new URL in the iframe
});

document.getElementById('backBtn').addEventListener('click', function() {
    document.getElementById('webView').contentWindow.history.back(); // Go back in history
});
