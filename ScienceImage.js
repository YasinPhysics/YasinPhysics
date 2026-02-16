// ScienceImage.js

let currentIndex = 0;  // গ্লোবাল করে রাখা যায় (সিম্পল ক্ষেত্রে)

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  if (slider) {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");

    function showSlide(index) {
      if (index >= slides.length) currentIndex = 0;
      if (index < 0) currentIndex = slides.length - 1;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (prevBtn) prevBtn.addEventListener("click", () => { currentIndex--; showSlide(currentIndex); });
    if (nextBtn) nextBtn.addEventListener("click", () => { currentIndex++; showSlide(currentIndex); });

    // Auto slide
    setInterval(() => {
      currentIndex++;
      showSlide(currentIndex);
    }, 2500);
  }
});
