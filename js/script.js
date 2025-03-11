// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dynamic Year in Footer
const yearElement = document.createElement('span');
yearElement.textContent = new Date().getFullYear();
document.querySelector('footer').appendChild(yearElement);

// Toggle Navigation Menu (For Mobile View)
const navToggle = document.createElement('button');
navToggle.textContent = 'Menu';
navToggle.style.display = 'none'; // Hidden by default; can be styled for mobile
document.querySelector('header').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const navMenu = document.querySelector('nav ul');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});
