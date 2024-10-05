document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            if (scrollPosition >= section.offsetTop - 60 && 
                scrollPosition < (section.offsetTop + section.offsetHeight - 60)) {
                let id = section.getAttribute('id');
                document.querySelector('.nav-link.active').classList.remove('active');
                document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
            }
        });

        // Special case for home/header
        if (scrollPosition < document.querySelector('#about').offsetTop - 60) {
            document.querySelector('.nav-link.active').classList.remove('active');
            document.querySelector('.nav-link[href="#"]').classList.add('active');
        }
    });

    // Loading screen effect
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.body.classList.add('loaded');
        }, 500); // Delay of 500ms for demo purposes. Adjust as needed.
    });
});
