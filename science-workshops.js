// Memories Slider (mobile only)
document.addEventListener("DOMContentLoaded", function () {
  const memoriesSlider = document.getElementById("memories-slider");
  if (memoriesSlider) {
    const slides = document.querySelectorAll("#memories-slider .slide");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");
    let currentIndex = 0;

    function showSlide(index) {
      if (index >= slides.length) currentIndex = 0;
      if (index < 0) currentIndex = slides.length - 1;
      memoriesSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
      currentIndex--;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex++;
      showSlide(currentIndex);
    });

    // Optional auto-slide
    // setInterval(() => {
    //   currentIndex++;
    //   showSlide(currentIndex);
    // }, 5000);
  }
});
