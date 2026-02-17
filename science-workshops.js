// Science Slider for mobile — মোবাইলে ছবি দেখানোর জন্য নিশ্চিত
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".sci-slider-wrapper");
  if (!wrapper) {
    console.log("Slider wrapper (.sci-slider-wrapper) পাওয়া যায়নি");
    return;
  }

  const slides = document.querySelectorAll(".sci-slide");
  const prev = document.querySelector(".sci-slider-prev");
  const next = document.querySelector(".sci-slider-next");

  if (slides.length === 0) {
    console.log("কোনো স্লাইড (.sci-slide) পাওয়া যায়নি");
    return;
  }

  if (!prev || !next) {
    console.log("তীর বাটন পাওয়া যায়নি");
    return;
  }

  let current = 0;

  function showSlide() {
    wrapper.style.transform = `translateX(-${current * 100}%)`;
  }

  prev.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide();
  });

  next.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide();
  });

  // প্রথম লোডে দেখানো + ফোর্স চেক
  showSlide();
  setTimeout(showSlide, 300); // ক্যাশ/লোডিং সমস্যা এড়ানোর জন্য
});
