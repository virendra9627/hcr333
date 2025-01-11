// Function to update the preview frame with the HTML code entered by the user
function updatePreview() {
    const htmlCode = document.getElementById("htmlCode").value;
    const iframe = document.getElementById("previewFrame");

    // Get the document inside the iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Write the HTML code inside the iframe document
    iframeDoc.open();
    iframeDoc.write(htmlCode);
    iframeDoc.close();
}
