let slideIndex = 0;

export const showSlides = (n) => {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Check if slides and dots exist on the page
  if (slides.length === 0 || dots.length === 0) {
    console.warn("No slides or dots found, skipping slideshow initialization.");
    return;
  }

  // Adjust slide index based on parameter
  if (n !== undefined) {
    slideIndex = n;
  } else {
    slideIndex++;
  }

  // Loop slide index if out of bounds
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides and remove "active" class from dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and add "active" class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

// Initialize slideshow if slides are present
if (document.getElementsByClassName("mySlides").length > 0) {
  // Set initial slide
  showSlides(slideIndex);

  // Add event listeners to dots
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => showSlides(index + 1));
  });

  // Automatically cycle through slides every 5 seconds
  setInterval(() => {
    showSlides();
  }, 5000);
} else {
  console.warn("Slideshow elements not found, skipping slideshow setup.");
}
