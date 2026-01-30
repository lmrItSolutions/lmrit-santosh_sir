// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Active Navigation Link based on page
const currentPage = document.body?.dataset?.page;
if (currentPage && navLinkItems.length) {
    navLinkItems.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Navbar shadow on scroll (if navbar exists)
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// News Card Click Animation
const newsCards = document.querySelectorAll('.news-card');
newsCards.forEach(card => {
    card.addEventListener('click', function() {
        // Add a scale animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to news cards
newsCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Apply fade-in animation to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Animate stats numbers when in view
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const target = entry.target;
            target.classList.add('animated');
            const text = target.textContent;
            
            // Check if it contains a number to animate
            const hasNumber = /\d/.test(text);
            if (hasNumber) {
                target.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    target.style.transform = 'scale(1)';
                }, 600);
            }
        }
    });
}, {
    threshold: 0.5
});

statNumbers.forEach(stat => {
    stat.style.transition = 'transform 0.6s ease';
    statsObserver.observe(stat);
});

// Real-time Clock for "Live" Badges
function updateLiveBadges() {
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        if (badge.textContent === 'Live') {
            // Add pulsing effect
            badge.style.animation = 'pulse 2s infinite';
        }
    });
}

updateLiveBadges();

// Optional: Add more interactivity - News Card Modal (commented out for simplicity)
/*
newsCards.forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('.news-title').textContent;
        const excerpt = this.querySelector('.news-excerpt').textContent;
        alert(`${title}\n\n${excerpt}\n\n[This is where full article would open]`);
    });
});
*/

// Signup Form Handling
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const userId = document.getElementById('userId').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const selectedSports = [];
        
        document.querySelectorAll('input[name="sports"]:checked').forEach(checkbox => {
            selectedSports.push(checkbox.value);
        });
        
        // Show success message
        const submitBtn = signupForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>✓ Registered Successfully!</span>';
        submitBtn.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
        
        // Log the data (in a real app, this would send to a server)
        console.log('New Registration:', {
            name: fullName,
            userId: userId,
            email: email,
            mobile: mobile,
            interests: selectedSports
        });
        
        // Reset form after 2 seconds
        setTimeout(() => {
            signupForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
        }, 2000);
    });
}

// Console welcome message
console.log('%cWelcome to LMR Solutions!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cYour ultimate sports news destination', 'color: #764ba2; font-size: 14px;');

// Add loading state
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

