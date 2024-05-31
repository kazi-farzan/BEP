
let navTl = gsap.timeline({ paused: true });

//hide the nav bar items
navTl.to("#page1 .nav-bar, #page1 .nav-item, #page1 .nav-bar .vertical-ruler ", { opacity:0 });

// Make BEP Smaller and move it up 
navTl.to(" .hero-title1 ", {
    duration: 1,
    scale: .2,
    y:"-40%",
    ease: "power1.out",
  });  

//Turn the page into a nav bar
navTl.to("#page1",{ 
    position: "fixed",
    height:"10%",
    duration:1,
}, "-=1");

//disappear subtitle, buttons
navTl.to("#page1 .title-container .hero-title2, #page1 .button-container .guideline-button1, #page1 .button-container .guideline-button2 ", {
    duration: .05,
    opacity:0,
    y:"-90%",
  }, "-=1");

  //Move BEP to the left
navTl.to("#page1 .title-container .hero-title1 ", {
    duration: 1,
    x:"-180%",
    ease: "power1.out"
  }, );

//nav-bar reappears
navTl.to("#page1 .nav-bar, #page1 .nav-bar .vertical-ruler ", { opacity:1, duration:.2 });

navTl.to("#page1 .nav-bar", { opacity:1, duration:.25, bottom: "25%", }, "-=0.5");

navTl.to("#page1 .nav-item ", { opacity:1,stagger:0.1, duration:.2 ,y:9 });

navTl.to("#page .button-container ", { 
    opacity:1,
    duration:.2,    
});

navTl.to("#page1 .button-container .guideline-button1 ", { opacity:1, duration:0.2,ease: "power1.out", scale:0.5});

navTl.to("#page1 .button-container .guideline-button2 ", { opacity:1, duration:0.2 ,ease: "power1.out", scale: 0.5});





//listener
window.addEventListener("scroll", function() {
    if (window.scrollY > 95) {
        navTl.play();
    } else {
        navTl.reverse();
    }
});