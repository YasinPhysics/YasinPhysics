// ScienceImage.js - Mobile Slider (2 seconds auto change)

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("workshop-slider");
  if (slider) {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");
    let currentIndex = 0;

    function showSlide(index) {
      if (index >= slides.length) currentIndex = 0;
      if (index < 0) currentIndex = slides.length - 1;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (prevBtn) prevBtn.addEventListener("click", () => { currentIndex--; showSlide(currentIndex); });
    if (nextBtn) nextBtn.addEventListener("click", () => { currentIndex++; showSlide(currentIndex); });

    // ২ সেকেন্ড পরপর অটো চেঞ্জ
    setInterval(() => {
      currentIndex++;
      showSlide(currentIndex);
    }, 2000);
  }
});
