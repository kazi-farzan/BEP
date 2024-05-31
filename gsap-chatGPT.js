// gsap.js

// Initial state
gsap.set("#page1", { height: "100%", width: "100%", backgroundColor: "#111" });
gsap.set(".guideline-button1, .guideline-button2", { opacity: 1 });
gsap.set(".hero-title1", { fontSize: "300px", color: "#d9e4ec" });
gsap.set(".hero-title2", { fontSize: "70px", color: "#3EEB57" });

// Scroll animation
let navTl = gsap.timeline({ paused: true });

navTl.to("#page1", { height: "7%", width: "100%", duration: 0.5 })
    //  .to(".title-container", { display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", duration: 0.5 }, "-=0.5")
     .to(".hero-title1", { fontSize: "20px", duration: 0.5 }, "-=0.5")
     .to(".hero-title2", { opacity: 0, duration: 0.5 }, "-=0.5")
     .to(".button-container", { display: "flex", flexDirection: "row", gap: "10px", duration: 0.5 }, "-=0.5");

window.addEventListener("scroll", function() {
    if (window.scrollY > 70) {
        navTl.play();
    } else {
        navTl.reverse();
    }
});
