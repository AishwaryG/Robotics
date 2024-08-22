document.addEventListener("DOMContentLoaded", function() {
            // Typing Effect
            const text = "The Future of AI & Robotics";
            const typingSpeed = 100; 
            let index = 0;

            function typeText() {
                const typingElement = document.getElementById("typing-text");
                if (typingElement) {
                    if (index < text.length) {
                        typingElement.textContent += text.charAt(index);
                        index++;
                        setTimeout(typeText, typingSpeed);
                    }
                }
            }

            typeText();

            // Scroll Effect
            window.addEventListener('scroll', function() {
                const heroContent = document.querySelector('.hero-content');
                if (heroContent) {
                    const scrollPosition = window.scrollY;
                    heroContent.style.transform = `translateY(${scrollPosition / 3}px)`;
                    heroContent.style.opacity = `${1 - scrollPosition / 500}`;
                }
            });
        });
//feature/about/testimonial sections 
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000, 
        once: true,
    });
});
