
// Hero Slider
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('sliderPrev');
const nextBtn = document.getElementById('sliderNext');
const sliderDotsContainer = document.getElementById('sliderDots');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  // Update dots
  Array.from(sliderDotsContainer.children).forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Setup dots
function createDots() {
  sliderDotsContainer.innerHTML = '';
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('button');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
    sliderDotsContainer.appendChild(dot);
  }
}
// Entry animation for fade-in class
function fadeInOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Slider
  createDots();
  showSlide(currentSlide);
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Fade in effect
  fadeInOnScroll();
  window.addEventListener('scroll', fadeInOnScroll);

  // Set footer year
  document.getElementById('footerYear').textContent = new Date().getFullYear();
});
