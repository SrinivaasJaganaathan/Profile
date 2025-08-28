// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            
            // Remove loading screen from DOM after transition
            setTimeout(() => {
                if (loadingScreen.parentNode) {
                    loadingScreen.remove();
                }
            }, 800);
        }, 2000); // Show for 2 seconds
    }
});

// Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(20, 20, 20, 0.98)';
        } else {
            navbar.style.background = 'rgba(20, 20, 20, 0.95)';
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add staggered animation for grid items
            const gridItems = entry.target.querySelectorAll('.education-card, .project-card, .service-card, .timeline-item');
            gridItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 150);
            });
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Skills Auto-Scroll
function duplicateSkillTiles() {
    const skillsTrack = document.querySelector('.skills-track');
    const skillTiles = Array.from(skillsTrack.children);
    
    // Clone all tiles and append them for seamless loop
    skillTiles.forEach(tile => {
        const clone = tile.cloneNode(true);
        skillsTrack.appendChild(clone);
    });
}

// Initialize skills duplication
document.addEventListener('DOMContentLoaded', duplicateSkillTiles);

// Pause animation on hover
document.addEventListener('DOMContentLoaded', function() {
    const skillsContainer = document.querySelector('.skills-container');
    const skillsTrack = document.querySelector('.skills-track');

    if (skillsContainer && skillsTrack) {
        skillsContainer.addEventListener('mouseenter', () => {
            skillsTrack.style.animationPlayState = 'paused';
        });

        skillsContainer.addEventListener('mouseleave', () => {
            skillsTrack.style.animationPlayState = 'running';
        });
    }
});

// Experience Modals
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Open modal
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Add smooth entrance animation
                setTimeout(() => {
                    modal.querySelector('.modal-content').style.transform = 'translateY(0)';
                }, 10);
            }
        });
    });

    // Close modal
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
        }
    });
});

// Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #e50914, #cc0812);
                color: white;
                padding: 2rem 3rem;
                border-radius: 10px;
                text-align: center;
                z-index: 3000;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                animation: fadeInScale 0.5s ease-out;
            `;
            successMessage.innerHTML = `
                <h3 style="margin-bottom: 1rem;">Thank you, ${name}!</h3>
                <p>Your message has been received. I'll get back to you soon.</p>
            `;
            
            // Add animation keyframes
            if (!document.querySelector('#success-animation-styles')) {
                const style = document.createElement('style');
                style.id = 'success-animation-styles';
                style.textContent = `
                    @keyframes fadeInScale {
                        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                        100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            document.body.appendChild(successMessage);
            
            // Reset form
            this.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    }
});

// Parallax Effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-bg');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Add loading states for buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Skip for navigation links
            if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                return;
            }
            
            // Skip for external links
            if (this.getAttribute('target') === '_blank') {
                return;
            }
            
            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;
            
            // Reset after 2 seconds (simulated loading)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
});

// Add scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #e50914, #cc0812);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollIndicator);
    
    // Update scroll indicator
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });
});

// Add dynamic year to footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2024', currentYear);
    }
});

// Add keyboard navigation for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && (this.tagName === 'A' || this.tagName === 'BUTTON')) {
                this.click();
            }
        });
    });
});

// Performance optimization: Lazy load animations
const lazyAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            lazyAnimationObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe elements for lazy animation
document.addEventListener('DOMContentLoaded', function() {
    const animatableElements = document.querySelectorAll('.education-card, .project-card, .service-card');
    animatableElements.forEach(element => {
        lazyAnimationObserver.observe(element);
    });
});

// Add smooth transitions for theme elements
document.addEventListener('DOMContentLoaded', function() {
    // Add transition styles to all interactive elements
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Error handling for external resources
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.src.includes('pexels')) {
        // Fallback for failed image loads
        e.target.style.display = 'none';
        console.warn('Failed to load external image:', e.target.src);
    }
}, true);

// Add resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // Recalculate animations on resize
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer && window.innerWidth <= 480) {
        const skillTiles = document.querySelectorAll('.skill-tile');
        skillTiles.forEach(tile => {
            tile.style.flex = '0 0 250px';
        });
    }
});

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Netflix-style resume website loaded successfully!');
    
    // Add custom cursor effect for better UX
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        width: 10px;
        height: 10px;
        background: #e50914;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX - 5 + 'px';
        cursor.style.top = e.clientY - 5 + 'px';
        cursor.style.opacity = '0.8';
    });
    
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });
});
