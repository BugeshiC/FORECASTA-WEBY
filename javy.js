// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Basic Form Submission Handler
document.querySelector('.contact form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    alert('Thank you for reaching out to FORECASTA. We will get back to you shortly!');
    this.reset();
});
