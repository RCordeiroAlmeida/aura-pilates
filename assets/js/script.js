document.addEventListener("DOMContentLoaded", () => {
    // Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Form Handling
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado! Recebemos seus dados e entraremos em contato em breve.');
    });
});