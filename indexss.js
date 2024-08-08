// Array of image URLs
const images = [
  "https://via.placeholder.com/300x300?text=Image+1",
  "https://via.placeholder.com/300x300?text=Image+2",
  "https://via.placeholder.com/300x300?text=Image+3",
  "https://via.placeholder.com/300x300?text=Image+4",
];

// Get the image element
const imageElement = document.getElementById("shuffle-image");

// Function to shuffle images
function shuffleImages() {
  // Randomly select an image from the array
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];

  // Change the image source
  imageElement.style.opacity = 0; // Fade out
  setTimeout(() => {
    imageElement.src = selectedImage;
    imageElement.style.opacity = 1; // Fade in
  }, 500); // Time should match the CSS transition duration
}

// Initial load
shuffleImages();

// Shuffle images every 3 seconds
setInterval(shuffleImages, 3000);
