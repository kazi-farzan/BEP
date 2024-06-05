document.addEventListener("DOMContentLoaded", function() {    
    const navItems = document.querySelectorAll('.benefits-nav-item');
    const benefitSections = document.querySelectorAll('.benefit-content');

    // GSAP animation for the nav items
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                backgroundImage: "linear-gradient(90deg, #43cea2, #185a9d)",                
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
                fontSize: "5rem",           
                duration: 0.3,
                ease: "power1.inOut",
                onUpdate: () => {
                    item.style.webkitBackgroundClip = 'text';
                    item.style.webkitTextFillColor = 'transparent';
                }
            });
        });

        item.addEventListener('click', () => {
            const targetBenefit = item.getAttribute('data-benefit');
            benefitSections.forEach(section => {
                if (section.id === targetBenefit) {
                    gsap.to(section.querySelectorAll('li'), {
                        autoAlpha: 1,
                        duration: 0.5,
                        stagger: 0.2,
                        ease: 'power2.inOut'
                    });
                    section.classList.add('visible');
                    section.classList.remove('hidden');
                } else {
                    gsap.to(section.querySelectorAll('li'), { autoAlpha: 0, duration: 0.5 });
                    section.classList.remove('visible');
                    section.classList.add('hidden');
                }
            });
        });
    });
});
