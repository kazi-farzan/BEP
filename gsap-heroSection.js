
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.hero-title1');
    const navItems = document.querySelectorAll('.nav-item');    
    
    // GSAP animation for the hero title
    title.addEventListener('mouseenter', () => {
        gsap.to(title, {
            backgroundImage: "linear-gradient(90deg, #43cea2, #185a9d)",
            duration: 0.5,
            ease: "power1.inOut",
            onUpdate: () => {
                title.style.webkitBackgroundClip = 'text';
                title.style.webkitTextFillColor = 'transparent';
            }
        });
    });

    title.addEventListener('mouseleave', () => {
        gsap.to(title, {
            backgroundImage: "linear-gradient(90deg, #D9E4EC, #D9E4EC)",
            duration: 0.5,
            ease: "power1.inOut",
            onUpdate: () => {
                title.style.webkitBackgroundClip = 'text';
                title.style.webkitTextFillColor = 'transparent';
            }
        });
    });

    // GSAP animation for the nav items
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                backgroundImage: "linear-gradient(90deg, #43cea2, #185a9d)",
                fontSize: "3rem",
                duration: 0.3,
                ease: "power1.inOut",
                onUpdate: () => {
                    item.style.webkitBackgroundClip = 'text';
                    item.style.webkitTextFillColor = 'transparent';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                backgroundImage: "linear-gradient(90deg, #D9E4EC, #D9E4EC)",     
                fontSize: "2rem",           
                duration: 0.3,
                ease: "power1.inOut",
                onUpdate: () => {
                    item.style.webkitBackgroundClip = 'text';
                    item.style.webkitTextFillColor = 'transparent';
                }
            });
        });
    });
});



// let navTl = gsap.timeline({ paused: true });

// //hide the nav bar items
// navTl.to("#page1 .nav-bar, #page1 .nav-item, #page1 .nav-bar .vertical-ruler ", { opacity:0 });

// // Make BEP Smaller and move it up 
// navTl.to(" .hero-title1 ", {
    
//     duration: 1,
//     scale: .2,
//     y:"-10%",
//     ease: "power1.out",
//   });  

// //Turn the page into a nav bar
// navTl.to("#page1",{ 
//     position: "fixed",    
//     height:"10%",
//     duration:1,
// }, "-=1");

// //disappear subtitle, buttons
// navTl.to("#page1 .title-container .hero-title2, #page1 .button-container .guideline-button1, #page1 .button-container .guideline-button2 ", {
//     duration: .5,
//     opacity:0,   

//   }, "-=1");

//   //Move BEP to the left
// navTl.to("#page1 .title-container .hero-title1 ", {
//     duration: 1,
//     x:"-180%",
//     ease: "power1.out"
//   }, );

// //turn the nav column to a row
// navTl.to("#page1",{     
//     flexDirection:"row",
//     justifyContent: "space-between",    
// },);

// //nav-bar reappears
// navTl.to("#page1 .nav-bar, #page1 .nav-bar .vertical-ruler ", { opacity:1, duration:.2 });

// navTl.to("#page1 .nav-bar", { opacity:1, duration:.25, bottom: "25%", left: "35%"}, "-=0.5");

// navTl.to("#page1 .nav-item ", { opacity:1,stagger:0.1, duration:.2 ,y:9 });

// navTl.to("#page .button-container ", { 
//     opacity:1,
//     duration:.2,    
// });

// navTl.to("#page1 .button-container .guideline-button1 ", { opacity:1, duration:0.4, scale:0.8});

// navTl.to("#page1 .button-container .guideline-button2 ", { opacity:1, duration:0.4 , scale: 0.8},"-=0.4");





// //listener
// window.addEventListener("scroll", function() {
//     if (window.scrollY > 95) {
//         navTl.play();
//     } else {
//         navTl.reverse();
//     }
// });