// Science Slider for mobile (updated with class selectors + error handling)
document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".sci-slider-wrapper");
  
  if (!sliderWrapper) {
    console.warn("Science slider wrapper (.sci-slider-wrapper) not found");
    return;
  }

  const slides = document.querySelectorAll(".sci-slide");
  const prevBtn = document.querySelector(".sci-slider-prev");
  const nextBtn = document.querySelector(".sci-slider-next");

  if (slides.length === 0) {
    console.warn("No slides found (.sci-slide)");
    return;
  }
  if (!prevBtn || !nextBtn) {
    console.warn("Slider arrows not found");
    return;
  }

  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
  });

  // প্রথম স্লাইড দেখানো
  showSlide(currentIndex);
  
  // অটো-স্লাইড (ঐচ্ছিক, চাইলে চালু করতে পারেন)
  // setInterval(() => { currentIndex++; showSlide(currentIndex); }, 5000);
});
