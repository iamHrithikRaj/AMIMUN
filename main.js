gsap.registerPlugin(ScrollTrigger);

let t = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 2,
    pin: "#main",
  },
});

t.to("#videoplayer", { width: "100%", ease: "Expo.easeInOut" });

// gsap.to("#videoplayer", {
//   scrollTrigger: {
//     trigger: "#main",
//     start: "top top",
//     scrub: 2,
//     pin: "#main",
//   },
//   width: "100%",
//   ease: "Expo.easeInOut",
// });


let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 2,
    pin: "#main",
  },
});

t1.to(".videoplayer-center-text", { opacity: "1", ease: "Expo.easeInOut", visibility: "visible" }, 0.3);

// gsap.to(
//   ".videoplayer-center-text",
//   {
//     scrollTrigger: {
//       trigger: "#main",
//       start: "top top",
//       scrub: 1,
//     },
//     opacity: 1,
//     ease: "Expo.easeInOut",
//   },
//   1000
// );

gsap.to("#one", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  left: "-600%",
  ease: "Expo.easeInOut",
  opacity: 0,
});

gsap.to("#holder1", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  left: "-300%",
  ease: "Expo.easeInOut",
  opacity: 0,
});

gsap.to("#six", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  right: "-600%",
  ease: "Expo.easeInOut",
  opacity: 0,
});

gsap.to("#holder2", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  right: "-300%",
  ease: "Expo.easeInOut",
  opacity: 0,
});

anime.timeline().add({
  targets: ".header",
  opacity: [0, 1],
  translateY: [80, 0],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 300 + 40 * i,
});


var cool = 0;