gsap.from("#Logotext , #logo", {
    x:-100,
    duration:3,
    delay:0.5,
    opacity:0,
    stagger:0.2
    })
//     gsap.from("#nav-bar-text", {
//         y:-100,
//         duration:3,
//         delay:0.5,
//         opacity:0,
//         stagger:0.2
//         })

// gsap.from("#hyperlinks",{
//   x:"100%",
//   duration: 6, // Duration for one complete animation cycle
//     repeat: -1,
//     ease: "linear",

// })


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds

}const cardWrapper = document.getElementById('card-wrapper');
const cardWidth = document.querySelector('.card').offsetWidth;
const cardsToShow = 3;
let currentSlide = 0;

function updateCardWrapperPosition() {
  const translateValue = -currentSlide * cardWidth * cardsToShow;
  cardWrapper.style.transform = `translateX(${translateValue}px)`;
}

function slide(direction) {
  const totalCards = document.querySelectorAll('.card').length;

  if (direction === 'left' && currentSlide > 0) {
    currentSlide--;
  } else if (direction === 'right' && currentSlide < totalCards - cardsToShow) {
    currentSlide++;
  }

  updateCardWrapperPosition();
}

// Initial position setup
updateCardWrapperPosition();
