document.addEventListener("DOMContentLoaded", function() {
    const hp_title = document.querySelector('.hero-title1');    
    
    // GSAP animation for the hero title
    hp_title.addEventListener('mouseenter', () => {
        gsap.to(hp_title, {
            backgroundImage: "linear-gradient(90deg, #43cea2, #185a9d)",
            duration: 0.5,
            ease: "power1.inOut",
            onUpdate: () => {
                hp_title.style.webkitBackgroundClip = 'text';
                hp_title.style.webkitTextFillColor = 'transparent';
            }
        });
    });

    hp_title.addEventListener('mouseleave', () => {
        gsap.to(hp_title, {
            backgroundImage: "linear-gradient(90deg, #2ECC71, #2ECC71)",
            duration: 0.5,
            ease: "power1.inOut",
            onUpdate: () => {
                hp_title.style.webkitBackgroundClip = 'text';
                hp_title.style.webkitTextFillColor = 'transparent';
            }
        });
    });
})
