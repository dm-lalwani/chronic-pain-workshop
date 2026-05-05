$(document).ready(function () {
  function renderTestimonials(container, theme = "dark") {
    container.innerHTML = testimonials
      .map(
        (item) => `
    <div class="px-3 h-full">
      <div class="h-full flex flex-col justify-between 
        ${theme === "dark" ? "bg-white/5 border-white/10 text-white" : "border-gray-200 text-gray-700"} 
        border rounded-2xl py-7 hover:border-[#2ca0da] transition relative">

        <img src="${item.image}" class="w-12 h-12 rounded-full absolute top-3 right-1" />
        <img src="../assets/images/testimonial.png" class="w-14 h-14 mx-auto absolute" />

        <p class="text-sm pl-16 ${theme === "dark" ? "pr-12 min-h-30" : "pr-14 min-h-24"} mt-3 ">
          "${item.text}"
        </p>

        <p class="text-sm pr-4 text-right">
          - ${item.name}
        </p>
      </div>
    </div>
  `,
      )
      .join("");
  }
  const indexSliderContainer = document.querySelector(".skills-slider");
  const container = document.querySelector(".testimonial-slider");

  if (indexSliderContainer) {
    renderTestimonials(indexSliderContainer, "dark");
    $(".skills-slider").slick({
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      slidesToShow: 3,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
      ],
    });
  }

  if (container) {
    renderTestimonials(container, "light");
    $(".testimonial-slider").slick({
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      slidesToShow: 2,
      responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    });
  }

  // ================= COUNTDOWN TIMER =================
  function startCountdown(targetDate) {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // If timer elements not present (like on other pages), skip
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        daysEl.innerText = "00";
        hoursEl.innerText = "00";
        minutesEl.innerText = "00";
        secondsEl.innerText = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      daysEl.innerText = String(days).padStart(2, "0");
      hoursEl.innerText = String(hours).padStart(2, "0");
      minutesEl.innerText = String(minutes).padStart(2, "0");
      secondsEl.innerText = String(seconds).padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // 👉 SET YOUR TARGET DATE HERE
  // const targetDate = new Date().getTime() + 15 * 60 * 1000;
  const targetDate = new Date("May 31, 2026 19:00:00").getTime();

  startCountdown(targetDate);
});
