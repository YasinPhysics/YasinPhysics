document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".sci-slider-wrapper");
  if (!wrapper) {
    console.log("Slider wrapper not found");
    return;
  }

  const slides = document.querySelectorAll(".sci-slide");
  const prev = document.querySelector(".sci-slider-prev");
  const next = document.querySelector(".sci-slider-next");

  if (slides.length === 0 || !prev || !next) {
    console.log("Slider elements missing");
    return;
  }

  let index = 0;

  function show() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    show();
  });

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    show();
  });

  // প্রথম স্লাইড দেখানো + ফোর্স রিফ্রেশ
  show();
  setTimeout(show, 300); // ৩০০ms পর আবার দেখানো (ক্যাশ/লোডিং সমস্যা এড়ানোর জন্য)
});
