// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle the active class for animation
    navList.classList.toggle('active'); // Show or hide the navigation menu
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for sticky navbar height
                behavior: 'smooth'
            });
        }

        // Close the hamburger menu after clicking a link (for mobile)
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        }
    });
});

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }, 100);
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});