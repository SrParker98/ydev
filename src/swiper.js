const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  centeredSlides: true,

  loopDirection: "reverse",
  pauseOnMouseEnter: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
swiper.on("slideChange", function () {
  // Obtener el índice del slide activo
  var index = swiper.activeIndex;
  // Obtener el elemento del slide activo
  var slide = swiper.slides[index];

  // Selección barra

  // Obtener todos los elementos con la clase .progress-bar-value
  var barras = document.querySelectorAll(".progress-bar-value");
  // Eliminar la clase start de todos los elementos
  barras.forEach(function (barra) {
    barra.classList.remove("start");
  });

  // Aplicar una clase según el índice
  if (index === 0) {
    // Primer slide
    // Añadir la clase start al primer elemento del array
    barras[0].classList.add("start");
  } else if (index === swiper.slides.length - 1) {
    // Último slide
    // Añadir la clase start al último elemento del array
    barras[barras.length - 1].classList.add("start");
  } else {
    // Slides intermedios
    // Añadir la clase start al elemento correspondiente al índice
    barras[index].classList.add("start");
  }
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
    // Snaps slider position to slides when you release Scrollbar
    snapOnRelease: true,
  },
  autoplay: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
