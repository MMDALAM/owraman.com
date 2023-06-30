/*  mobile menu */

$(".mobile-nav").click(function (e) {
  e.stopPropagation();
  $(".offconvas").toggleClass("show-sidebar");
});
$("body").click(function () {
  $(".offconvas").removeClass("show-sidebar");
});

/*   sticky header */

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 600) {
    $(".header-wrapper").addClass("fixed-header");
  } else {
    $(".header-wrapper").removeClass("fixed-header");
  }
});

/*   single portfolio   */

/* #1  */
$(".portfolio-item.num1").click(function () {
  $(".service.num1").addClass("show-modal");
});
$(".service-close").click(function () {
  $(".service.num1").removeClass("show-modal");
});

/* #2  */
$(".portfolio-item.num2").click(function () {
  $(".service.num2").addClass("show-modal");
});
$(".service-close").click(function () {
  $(".service.num2").removeClass("show-modal");
});

/* #3  */
$(".portfolio-item.num3").click(function () {
  $(".service.num3").addClass("show-modal");
});
$(".service-close").click(function () {
  $(".service.num3").removeClass("show-modal");
});

/* #4 */
$(".portfolio-item.num4").click(function () {
  $(".service.num4").addClass("show-modal");
});
$(".service-close").click(function () {
  $(".service.num4").removeClass("show-modal");
});

/* #5  */
$(".portfolio-item.num5").click(function () {
  $(".service.num5").addClass("show-modal");
});
$(".service-close").click(function () {
  $(".service.num5").removeClass("show-modal");
});

/* #6  */
$(".portfolio-item.num6").click(function () {
  $(".service.num6").addClass("show-modal");
});
$(".service-close").click(function () {
  $(".service.num6").removeClass("show-modal");
});

/*   single post   */

/* #1  */
$(".blog-item.num1").click(function () {
  $(".modal.num1").addClass("show-modal");
});
$(".modal-close").click(function () {
  $(".modal.num1").removeClass("show-modal");
});

/* #2  */
$(".blog-item.num2").click(function () {
  $(".modal.num2").addClass("show-modal");
});
$(".modal-close").click(function () {
  $(".modal.num2").removeClass("show-modal");
});

/* #3  */
$(".blog-item.num3").click(function () {
  $(".modal.num3").addClass("show-modal");
});
$(".modal-close").click(function () {
  $(".modal.num3").removeClass("show-modal");
});

/*-------------------------------------------------*/
/* =  Scroll between sections
/*-------------------------------------------------*/
$('a[href*="#"]:not([href="#"])').click(function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
      return false;
    }
  }
});

/*   skill progress */

$(".skill-progress").css("width", function () {
  return $(this).data("value") + "%";
});

/*   Animate on scroll library    */

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: true, // disables automatic mutations' detections (advanced)
  debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
