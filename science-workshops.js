// Science Slider for mobile (updated class names)
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".sci-slider-wrapper");
  if (slider) {
    const slides = document.querySelectorAll(".sci-slide");
    const prevBtn = document.querySelector(".sci-slider-prev");
    const nextBtn = document.querySelector(".sci-slider-next");
    let currentIndex = 0;

    function showSlide(index) {
      if (index >= slides.length) currentIndex = 0;
      if (index < 0) currentIndex = slides.length - 1;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (prevBtn) prevBtn.addEventListener("click", () => { currentIndex--; showSlide(currentIndex); });
    if (nextBtn) nextBtn.addEventListener("click", () => { currentIndex++; showSlide(currentIndex); });
  }
});
