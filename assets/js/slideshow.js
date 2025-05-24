let slideIndex = 0;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

export const showSlides = (index) => {
   // Wrap around index
   if (index >= slides.length) slideIndex = 0;
   if (index < 0) slideIndex = slides.length - 1;
 
   // Remove active classes
   slides.forEach(slide => slide.classList.remove('active'));
   dots.forEach(dot => dot.classList.remove('active'));
 
   // Add active to current
   slides[slideIndex].classList.add('active');
   dots[slideIndex].classList.add('active');
 };
 
 const nextSlide = () => {
   slideIndex++;
   showSlides(slideIndex);
 };
 
 const prevSlide = () => {
   slideIndex--;
   showSlides(slideIndex);
 };
 
 dots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
     slideIndex = index;
     showSlides(slideIndex);
   });
 });
 
 nextBtn.addEventListener('click', nextSlide);
 prevBtn.addEventListener('click', prevSlide);
 
 // Auto cycle
 setInterval(() => {
   slideIndex++;
   showSlides(slideIndex);
 }, 12000);
