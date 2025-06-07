document.addEventListener('DOMContentLoaded', function() {
    // Show answer for daily puzzle
    const showAnswerBtn = document.getElementById('show-answer');
    const puzzleAnswer = document.getElementById('puzzle-answer');
    
    if (showAnswerBtn && puzzleAnswer) {
        showAnswerBtn.addEventListener('click', function() {
            if (puzzleAnswer.style.display === 'none') {
                puzzleAnswer.style.display = 'block';
                showAnswerBtn.textContent = 'Hide Answer';
            } else {
                puzzleAnswer.style.display = 'none';
                showAnswerBtn.textContent = 'Show Answer';
            }
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Here you would typically send the email to your server
            console.log('Subscribed email:', email);
            
            // Show success message
            alert('Thanks for subscribing! We\'ll keep you updated with new puzzles.');
            emailInput.value = '';
        });
    }
    
    // Animate feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    function animateOnScroll() {
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // Interactive math shapes in hero section
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        shape.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.opacity = '1';
        });
        
        shape.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '0.8';
        });
    });
});