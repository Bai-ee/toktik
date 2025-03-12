document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all feature cards and tech items
    document.querySelectorAll('.feature-card, .tech-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your interest! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Parallax effect for hero image
    let lastScrollY = window.scrollY;
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            const delta = (currentScrollY - lastScrollY) * 0.1;
            
            if (currentScrollY < window.innerHeight) {
                heroImage.style.transform = `perspective(1000px) rotateY(-15deg) translateY(${-delta}px)`;
            }
            
            lastScrollY = currentScrollY;
        });
    }
});
