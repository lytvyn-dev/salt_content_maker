gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// if (ScrollTrigger.isTouch !== 1) {
let smooter = ScrollSmoother.create({
  smooth: 3,
  effects: true,
  smoothTouch: 0.1,
});
// }

gsap.to(".hero-section", {
  scrollTrigger: {
    trigger: ".hero-section",
    scrub: true,
    start: "bottom center",
  },
  opacity: 0,
  duration: 2,
});

let galleryLeft = gsap.utils.toArray(".gallery__left .gallery__item");

galleryLeft.forEach((el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      xPercent: -100,
    },
    {
      scrollTrigger: {
        trigger: el,
        start: "-850",
        end: "-100",
        scrub: true,
      },
      opacity: 1,
      xPercent: 0,
    }
  );
});

let galleryRight = gsap.utils.toArray(".gallery__right .gallery__item");

galleryRight.forEach((el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      xPercent: 100,
    },
    {
      scrollTrigger: {
        trigger: el,
        start: "-1000",
        end: "-300",
        scrub: true,
      },
      opacity: 1,
      xPercent: 0,
    }
  );
});

const mediaQuery = window.matchMedia("(max-width: 560px)");

function handleTabletChange(e) {
  if (e.matches) {
    const mainTitle = document.querySelector(".main-title");
    mainTitle.setAttribute("data-speed", "1");
    mainTitle.setAttribute("data-lag", ".7");
  }
}

mediaQuery.addEventListener("change", handleTabletChange);
handleTabletChange(mediaQuery);
