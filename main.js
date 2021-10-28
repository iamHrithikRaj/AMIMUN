<<<<<<< Updated upstream
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
=======
gsap.registerPlugin(ScrollTrigger);

/*
gsap.set('.follower', {xPercent: -50, yPercent: -50});
gsap.set('.curs', {xPercent: -50, yPercent: -50});

var follower = document.querySelector('.follower');
var cursor = document.querySelector('.curs');

window.addEventListener('mousemove', e=> {

        gsap.to(cursor, 0.2, {x: e.clientX, y:e.clientY});
        gsap.to(follower, 0.8, {x: e.clientX, y:e.clientY});

}) */

// CURSOR
var cursor = $(".curr"),
follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});


/*

let mouseCursor = document.querySelector('.curs');
let navLinks = document.querySelectorAll('li');
let moreLinks = document.querySelectorAll('a')

window.addEventListener('mousemove',cursor);

function cursor(e)
{
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link=> {
 
 link.addEventListener("mouseleave", ()=>{
           
           mouseCursor.classList.remove("grow");
           link.classList.remove("hover");
 });
 link.addEventListener("mouseover", ()=>{
           
           mouseCursor.classList.add("grow");
           link.classList.add("hover");
 });

});

moreLinks.forEach(l=> {

l.addEventListener("mouseleave", ()=>{

     mouseCursor.classList.remove("grow");
     l.classList.remove("hover");

});

l.addEventListener("mouseover", ()=>{

     mouseCursor.classList.add("grow");
     l.classList.add("hover");
});
}); 

*/

if (screen.width > 414) {
  let t = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      scrub: 2,
      pin: "#main",
    },
  });

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      scrub: 2,
      pin: "#main",
    },
  });

  console.log("OK" + " " + screen.width);
  t.to("#videoplayer", { width: "100%", ease: "Expo.easeInOut" });

  t1.to(
    ".videoplayer-center-text",
    { opacity: "1", ease: "Expo.easeInOut", visibility: "visible" },
    0.3
  );
}

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
>>>>>>> Stashed changes

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

