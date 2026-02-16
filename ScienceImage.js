// ScienceImage.js

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Slider Functionality
  const slider = document.getElementById("slider");
  if (slider) {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");
    let currentIndex = 0;  // এটা এখানে থাকবে

    function showSlide(index) {
      if (index >= slides.length) currentIndex = 0;
      if (index < 0) currentIndex = slides.length - 1;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex--;
        showSlide(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex++;
        showSlide(currentIndex);
      });
    }

    // Auto slide — এখন আনকমেন্ট করা আছে, ৫ সেকেন্ড পর পর চেঞ্জ হবে
    setInterval(() => {
      currentIndex++;
      showSlide(currentIndex);
    }, 5000);
  }

  // Optional hover enhancement (যদি চাও)
  document.querySelectorAll(".collage-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.3)";
      item.style.zIndex = "10";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
      item.style.zIndex = "1";
    });
  });
});
