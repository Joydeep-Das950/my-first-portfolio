// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
          preloader.style.display = 'none';
      }, 500);
  }, 2000);
});


// ATOTA DUR

document.addEventListener('DOMContentLoaded', () => {
    // Your existing code...

    // Handle active nav links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Set Home as active by default
    function setInitialActive() {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#home') {
                link.classList.add('active');
            }
        });
    }

    // Call this function when page loads
    setInitialActive();

    // Update active state on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.scrollY >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Handle link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        });
    });

    // Reset active state when back to top
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            setInitialActive();
        }
    });
});

// ATOTA DUR


// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  
  // Initial check for scroll position
  if (window.scrollY === 0) {
      navbar.classList.add('bg-transparent');
  }

  // Update on scroll
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.classList.remove('bg-transparent');
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.add('bg-transparent');
          navbar.classList.remove('scrolled');
      }
  });
});

// DOM Content Loaded Event Handler
document.addEventListener('DOMContentLoaded', () => {
  // Add static datetime and user login display
  const userInfo = document.createElement('div');
  userInfo.classList.add('user-info');
  // userInfo.innerHTML = `
  //     <div class="datetime-display">2025-02-10 16:21:58 UTC</div>
  //     <div class="user-login"><i class="fas fa-user"></i> IntelliGent-Legend-Coder</div>`;
  document.querySelector('.navbar .container').appendChild(userInfo);

  // Typing animation for hero section
  const textElement = document.querySelector('.hero-section .lead');
  const text = textElement.textContent;
  textElement.textContent = '';
  let i = 0;

  function typeWriter() {
      if (i < text.length) {
          textElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
      }
  }
  typeWriter();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
          // Close mobile menu if open
          const navbarToggler = document.querySelector('.navbar-toggler');
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
              navbarToggler.click();
          }
      }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.padding = '0.5rem 0';
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
      navbar.style.padding = '1rem 0';
      navbar.style.boxShadow = 'none';
  }
});

// Add to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-custom');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });
});

// Dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
  body.classList.add('dark-mode');
  darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const icon = darkModeToggle.querySelector('i');
  
  if (body.classList.contains('dark-mode')) {
      icon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('darkMode', 'enabled');
  } else {
      icon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('darkMode', 'disabled');
  }
});

// Hamburger menu animation
const hamburger = document.querySelector('.navbar-toggler');
hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);
  
  // Show loading state
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
      // Show success message
      alert('Message sent successfully!');
      
      // Reset form
      this.reset();
      
      // Restore button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
  }, 1500);
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.project-card, .testimonial-card, .skill');
const revealOnScroll = () => {
  revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }
  });
};

// Initial styles for reveal elements
revealElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Skills progress animation
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
      skill.style.transform = 'scale(1.1)';
  });
  
  skill.addEventListener('mouseleave', () => {
      skill.style.transform = 'scale(1)';
  });
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
  });
});

// Active section highlight in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id');
      }
  });
  
  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === '#home') {
          link.classList.add('active');
      }
  });
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = 'block';
  } else {
      scrollTopBtn.style.display = 'none';
  }
});

// Add this to your script.js
document.addEventListener('DOMContentLoaded', () => {
  // Contact Form Animation
  const contactForm = document.querySelector('.contact-form');
  const submitBtn = contactForm.querySelector('.submit-btn');

  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Add loading state
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
          <span>Sending...</span>
          <i class="fas fa-spinner fa-spin"></i>
      `;

      // Simulate form submission
      setTimeout(() => {
          // Show success message
          submitBtn.innerHTML = `
              <span>Message Sent!</span>
              <i class="fas fa-check"></i>
          `;
          submitBtn.classList.add('btn-success');

          // Reset form after delay
          setTimeout(() => {
              contactForm.reset();
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalText;
              submitBtn.classList.remove('btn-success');
          }, 2000);
      }, 1500);
  });

  // Input Animation
  const formControls = document.querySelectorAll('.form-control');
  formControls.forEach(control => {
      control.addEventListener('focus', () => {
          control.parentElement.classList.add('focused');
      });
      
      control.addEventListener('blur', () => {
          if (!control.value) {
              control.parentElement.classList.remove('focused');
          }
      });
  });
});

// Counter Animation
function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = Math.ceil(target / 100); // Adjust speed based on target value

    function updateCount() {
        if (count < target) {
            count += speed;
            if (count > target) count = target;
            counter.textContent = count.toLocaleString();
            requestAnimationFrame(updateCount);
        }
    }

    updateCount();
}

// Start counter animation when element is in viewport
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter-value');
            counters.forEach(animateCounter);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const clientsSection = document.querySelector('#clients');
    if (clientsSection) {
        observer.observe(clientsSection);
    }

    // Mobile Navigation Enhancement
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        });
    });
});

// ATO DUR

// Add these styles to your CSS file
const style = document.createElement('style');
style.textContent = `
  .scroll-top-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--primary-color);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: none;
      transition: all 0.3s ease;
      z-index: 1000;
  }

  .scroll-top-btn:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  .user-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-left: 1rem;
  }

  .datetime-display,
  .user-login {
      padding: 0.5rem 1rem;
      background: rgba(0,0,0,0.1);
      border-radius: 20px;
      font-size: 0.9rem;
  }

  @media (max-width: 768px) {
      .user-info {
          display: none;
      }
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
  // Text Animation for Hero Section
  const textElement = document.querySelector('.hero-section .lead');
  const texts = [
      "Full Stack Web Developer & UI/UX Designer",
      "React Developer",
      "NextJS Developer"
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeText() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
          textElement.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
      } else {
          textElement.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
          isDeleting = true;
          typingSpeed = 2000; // Pause at end
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
      }

      setTimeout(typeText, typingSpeed);
  }

  typeText();
});

  // Initialize testimonial hover effects
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-10px) scale(1.02)';
          card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
      });
      
      card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0) scale(1)';
          card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
      });
  });
  