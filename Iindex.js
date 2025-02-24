// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Button animation on click
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');
    const targetSection = document.querySelector('#target-section'); // Replace with your target section ID

    button.addEventListener('click', function(event) {
        event.preventDefault();
        button.classList.add('animate');
        
        // Remove the class after the animation duration
        setTimeout(() => {
            button.classList.remove('animate');
        }, 300); // Match this duration with the CSS transition duration

        // Add slow spawn animation to the target section
        targetSection.classList.add('slow-spawn');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
