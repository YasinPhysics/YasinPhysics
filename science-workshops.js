document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".sci-slider-wrapper");
  if (!wrapper) {
    console.warn("Slider wrapper not found");
    return;
  }

  const slides = document.querySelectorAll(".sci-slide");
  const prev = document.querySelector(".sci-slider-prev");
  const next = document.querySelector(".sci-slider-next");

  if (slides.length === 0 || !prev || !next) {
    console.warn("Slider elements missing");
    return;
  }

  let current = 0;

  function showSlide() {
    wrapper.style.transform = `translateX(-${current * 100}%)`;
    console.log("Showing slide:", current); // debug
  }

  prev.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide();
  });

  next.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide();
  });

  showSlide();
  // লোডিং ইস্যু এড়াতে
  window.addEventListener("load", showSlide);
  setTimeout(showSlide, 500);
});
