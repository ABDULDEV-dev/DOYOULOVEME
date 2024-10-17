// Selecting the buttons
const yesButton = document.getElementById('btn1');
const noButton = document.getElementById('btn2');

// Function to display alert when "YES" button is clicked
yesButton.addEventListener('click', function() {
    alert('I love you too');
});

// Function to move the "NO" button randomly within the container when hovered or clicked
noButton.addEventListener('mouseover', function() {
    moveButton();
});

noButton.addEventListener('click', function() {
    moveButton();
});

// Function to move the "NO" button to a random position within the container
function moveButton() {
    const container = document.getElementById('container');
    
    // Get container dimensions
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Generate random new position within the container
    const newX = Math.floor(Math.random() * (containerWidth - noButton.offsetWidth));
    const newY = Math.floor(Math.random() * (containerHeight - noButton.offsetHeight));

    // Apply new position
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}
