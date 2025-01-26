// Select elements
const slides = document.querySelector('.slides');
const slidesItems = document.querySelectorAll('.slides img, .slides video');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0; // Track the current slide index
let isVideoPlaying = false; // Track if the video is playing

// Clone the first and last slides for seamless looping
const firstClone = slidesItems[0].cloneNode(true);
const lastClone = slidesItems[slidesItems.length - 1].cloneNode(true);

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slidesItems[0]);

// Adjust initial slide position
const slideWidth = slidesItems[0].clientWidth;
slides.style.transform = `translateX(${-slideWidth}px)`;

// Function to update the slide position
function updateSlidePosition() {
  if (!isVideoPlaying) { // Ensure slider does not move during video playback
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-((currentIndex + 1) * slideWidth)}px)`;
  }
}

// Handle looping logic after transition ends
slides.addEventListener('transitionend', () => {
  if (currentIndex === slidesItems.length - 1) {
    slides.style.transition = 'none';
    currentIndex = 0;
    slides.style.transform = `translateX(${-slideWidth}px)`;
  }
  if (currentIndex === -1) {
    slides.style.transition = 'none';
    currentIndex = slidesItems.length - 2;
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }
});

// Event listeners for navigation buttons
nextBtn.addEventListener('click', () => {
  if (!isVideoPlaying && currentIndex < slidesItems.length - 1) {
    currentIndex++;
    updateSlidePosition();
  }
});

prevBtn.addEventListener('click', () => {
  if (!isVideoPlaying && currentIndex > -1) {
    currentIndex--;
    updateSlidePosition();
  }
});

// Handle video playback logic
slidesItems.forEach((item, index) => {
  if (item.tagName === 'VIDEO') {
    // Play event: Stop the slider
    item.addEventListener('play', () => {
      if (currentIndex === index) {
        isVideoPlaying = true;
        slides.style.transition = 'none'; // Disable transitions during playback
      }
    });

    // Pause event: Allow slider to move
    item.addEventListener('pause', () => {
      if (currentIndex === index) {
        isVideoPlaying = false;
      }
    });

    // Ended event: Resume slider and go to the next slide
    item.addEventListener('ended', () => {
      if (currentIndex === index) {
        isVideoPlaying = false;
        currentIndex++;
        updateSlidePosition();
      }
    });
  }
});

// Handle window resize (optional)
window.addEventListener('resize', () => {
  const newSlideWidth = slidesItems[0].clientWidth;
  slides.style.transform = `translateX(${-((currentIndex + 1) * newSlideWidth)}px)`;
});