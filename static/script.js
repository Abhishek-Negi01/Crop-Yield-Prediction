// Reset the form when the New Prediction button is clicked
function resetForm() {
    // Reset the form fields
    document.getElementById('prediction-form').reset();

    // Remove any displayed prediction result
    const predictionResult = document.querySelector('h2');
    if (predictionResult) {
        predictionResult.style.display = 'none';
    }
}