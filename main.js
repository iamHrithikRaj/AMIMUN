gsap.to("#videoplayer", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 2,
    pin: "#main",
  },
  width: "100%",
  ease: "Expo.easeInOut",
});

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

