const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreDisplay = document.getElementById('score');
let score = 0;
let isJumping = false;

// Listen for the touch event to make the dino jump
document.addEventListener('touchstart', function(event) {
  if (!isJumping) {
    jump();
  }
});

// Function to make the dino jump
function jump() {
  isJumping = true;
  let jumpHeight = 0;
  const jumpInterval = setInterval(function() {
    if (jumpHeight < 100) {
      jumpHeight += 2;
      dino.style.bottom = `${jumpHeight}px`;
    } else {
      clearInterval(jumpInterval);
      let fallInterval = setInterval(function() {
        if (jumpHeight > 0) {
          jumpHeight -= 2;
          dino.style.bottom = `${jumpHeight}px`;
        } else {
          clearInterval(fallInterval);
          isJumping = false;
        }
      }, 20);
    }
  }, 20);
}

// Move the cactus and check for collisions
function moveCactus() {
  let cactusPosition = 600;
  const cactusSpeed = 5;
  
  const cactusInterval = setInterval(function() {
    // Randomly reset the cactus position and size
    if (cactusPosition < -60) {
      cactusPosition = Math.random() * 600 + 600; // Position it randomly
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    }
    
    cactusPosition -= cactusSpeed;
    cactus.style.right = `${cactusPosition}px`;
    
    // Check for collision
    if (cactusPosition > 50 && cactusPosition < 110 && parseInt(dino.style.bottom) < 40) {
      alert(`Game Over! Final Score: ${score}`);
      clearInterval(cactusInterval);
    }
  }, 20);
}

// Start moving the cactus
moveCactus();