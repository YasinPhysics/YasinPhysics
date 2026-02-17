// // Science Slider for mobile (updated class names)
// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".sci-slider-wrapper");
//   if (slider) {
//     const slides = document.querySelectorAll(".sci-slide");
//     const prevBtn = document.querySelector(".sci-slider-prev");
//     const nextBtn = document.querySelector(".sci-slider-next");
//     let currentIndex = 0;

//     function showSlide(index) {
//       if (index >= slides.length) currentIndex = 0;
//       if (index < 0) currentIndex = slides.length - 1;
//       slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     if (prevBtn) prevBtn.addEventListener("click", () => { currentIndex--; showSlide(currentIndex); });
//     if (nextBtn) nextBtn.addEventListener("click", () => { currentIndex++; showSlide(currentIndex); });
//   }
// });



// Science Slider for mobile - মোবাইলে ছবি দেখানোর জন্য নিশ্চিত করা
document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".sci-slider-wrapper");

  if (!sliderWrapper) {
    console.warn("Slider wrapper (.sci-slider-wrapper) পাওয়া যায়নি");
    return;
  }

  const slides = document.querySelectorAll(".sci-slide");
  const prevBtn = document.querySelector(".sci-slider-prev");
  const nextBtn = document.querySelector(".sci-slider-next");

  if (slides.length === 0) {
    console.warn("কোনো স্লাইড (.sci-slide) পাওয়া যায়নি");
    return;
  }

  if (!prevBtn || !nextBtn) {
    console.warn("স্লাইডারের তীর বাটন পাওয়া যায়নি");
    return;
  }

  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    console.log("Showing slide:", currentIndex); // ডিবাগের জন্য
  }

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
  });

  // প্রথম স্লাইড দেখানো + অটোমেটিক চেক
  showSlide(currentIndex);

  // যদি প্রথম লোডে দেখা না যায়, তাহলে ৫০০ms পর আবার চেষ্টা
  setTimeout(() => {
    showSlide(currentIndex);
  }, 500);
});
