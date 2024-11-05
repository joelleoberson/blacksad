import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// debut du module pour achter les livre
const scrollContainer = document.getElementById("scrollContainer");

function scrollLeft() {
  scrollContainer.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  });
}

function scrollRight() {
  scrollContainer.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  });
}

// fin du module pour achter les livre

// debut scroll horisontal

gsap.to(".slider-container", {
  x: "-80%",
  duration: 2,
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    scrub: 1,
    pin: true,
  },
});

//fin scroll horisontal

// debut paralaxe

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".parallax-container",
      start: "top top",
      scrub: 1,
      pin: true,
    },
  })
  .to(
    "#element-1",
    {
      top: "0%",
    },
    0
  );

// fin paralaxe
