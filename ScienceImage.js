// Mobile Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
  });

  // Auto slide (optional - 5 seconds)
  // setInterval(() => {
  //   currentIndex++;
  //   showSlide(currentIndex);
  // }, 5000);
});

setInterval(() => {
  currentIndex++;
  showSlide(currentIndex);
}, 5000); // প্রতি ৫ সেকেন্ডে পরের স্লাইড
