// Buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.about-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Change background color with ripple effect
            createRipple(event, button);
            gsap.to(button, {
                backgroundColor: "#D9E4EC",
                color: "#111",
                borderColor: "#D9E4EC",
                duration: 0.3
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                backgroundColor: "#2ECC71",
                color: "#111",
                borderColor: "#111",
                duration: 0.3
            });
        });
    });
});