let slideIndex = 0;

export const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n !== undefined) {
    slideIndex = n;
  } else {
    slideIndex++;
  }

  if (slideIndex > slides.length) {
      slideIndex = 1;
  } else if (slideIndex < 1) {
      slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

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
