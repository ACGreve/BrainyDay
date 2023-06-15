

/* // Configure canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to store the images
let images = [];

// Function to generate a new image
function generateImage() {
  const image = new Image();
  image.src = 'Assets/Raindrop.png'; // Replace with the path to your image
  
  // Initial position of the image
  image.x = Math.random() * canvas.width;
  image.y = -image.height;
  
  // Random speed for the falling motion
  image.speed = Math.random() * 3 + 1;

  // Push the image to the array
  images.push(image);
}

// Function to animate the images
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Iterate through the images array
  images.forEach(image => {
    // Update the position
    image.y += image.speed;

    // Draw the image on the canvas
    ctx.drawImage(image, image.x, image.y, image.width, image.height);

    // Check if the image has reached the bottom of the screen
    if (image.y > canvas.height) {
      // Remove the image from the array
      images = images.filter(img => img !== image);
    }
  });

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Generate new images at intervals
setInterval(generateImage, 500); // Adjust the interval as needed

// Start the animation
animate();
