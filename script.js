// Mobile navigation toggle
const body = document.querySelector('body');
const navToggle = document.querySelector('.mobile-nav-toggle');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

navToggle.addEventListener('click', () => {
    body.classList.toggle('mobile-nav-open');
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('mobile-nav-open');
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Skills filter logic
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        skillCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
