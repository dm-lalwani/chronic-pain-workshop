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

        <p class="text-sm pl-16 pr-12 mt-3 min-h-[120px]">
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
      autoplay: false,
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
      autoplay: false,
      slidesToShow: 2,
      responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    });
  }
});
