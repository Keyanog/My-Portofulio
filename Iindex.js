// Hamburger menu toggle for mobile view
document.getElementById('hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
});

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Form validation for contact form
const form = document.querySelector('form');
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Basic form validation
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simple email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission success
    alert('Form submitted successfully!');

    // Clear the form
    form.reset();
});

// Smooth scroll effect for navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth',
        });
    });
});

// Portfolio item hover effect (scale image and show overlay)
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    const overlay = item.querySelector('.overlay');

    item.addEventListener('mouseover', () => {
        overlay.style.opacity = '1';
    });

    item.addEventListener('mouseout', () => {
        overlay.style.opacity = '0';
    });
});

// Toggle dark/light theme
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Dynamic skill percentage progress
const skillBars = document.querySelectorAll('.percentage-bar');
skillBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    bar.style.width = `${percentage}%`;
});

// Add smooth animation for page load
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');
});

// Scroll effect for portfolio images
const portfolioImages = document.querySelectorAll('.portfolio-item img');
portfolioImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Custom cursor for mouse hover on certain elements
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY - 10}px`;
    cursor.style.left = `${e.clientX - 10}px`;
});

const hoverElements = document.querySelectorAll('.hover-effect');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});
