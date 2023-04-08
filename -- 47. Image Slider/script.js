const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const autoScroll = true;
let slideInterval;
intervalTime = 3000;

// Next button
const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  current.classList.remove('current');
};

// Prev button
const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slide[slides.length - 1].classList.add('current');
  }
  current.classList.remove('current');
};

// Add event listeners
next.addEventListener('click', () => {
  nextSlide();
  if (autoScroll) {
    clearInterval(slideInterval);
    auto();
  }
});
prev.addEventListener('click', () => {
  prevSlide();
  if (autoScroll) {
    clearInterval(slideInterval);
    auto();
  }
});

// Auto Scroll
if (autoScroll) {
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
}

auto();
