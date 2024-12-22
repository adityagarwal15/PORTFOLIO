function setActive(section) {
    const activeClass = 'active';
  
    // Remove the active class from all nav-toggles
    document.querySelectorAll('.nav-toggle').forEach(el => el.classList.remove(activeClass));
  
    // Add the active class to the clicked nav-toggle
    const activeToggle = document.querySelector(`.nav-toggle.${section}`);
    if (activeToggle) {
      activeToggle.classList.add(activeClass);
    }
  
    // Show and position the nav-indicator-pill
    const indicatorPill = document.querySelector('.nav-indicator-pill');
    if (indicatorPill && activeToggle) {
      indicatorPill.style.display = 'block';
      const toggleRect = activeToggle.getBoundingClientRect();
      const parentRect = activeToggle.parentElement.getBoundingClientRect();
  
      indicatorPill.style.width = `${toggleRect.width}px`;
      indicatorPill.style.left = `${toggleRect.left - parentRect.left}px`;
      indicatorPill.style.top = `${toggleRect.top - parentRect.top}px`;
    }
  
    // Show and position the nav-indicator-glow
    const indicatorGlow = document.querySelector('.nav-indicator-glow');
    if (indicatorGlow && activeToggle) {
      indicatorGlow.style.display = 'block';
      const toggleRect = activeToggle.getBoundingClientRect();
      const parentRect = activeToggle.parentElement.getBoundingClientRect();
  
      indicatorGlow.style.left = `${toggleRect.left - parentRect.left + toggleRect.width / 2 - indicatorGlow.offsetWidth / 2}px`;
      indicatorGlow.style.top = `${toggleRect.top - parentRect.top - 6}px`; // Adjust glow position
    }
  
    if (section === 'project') {
      window.location.href = 'http://127.0.0.1:3000/projects.html';
    } else if (section === 'about') {
      window.location.href = 'http://127.0.0.1:3000/about.html';
    } else if (section === 'resume') {
      alert('Resume page is under construction.'); // Optional placeholder for the resume link
    }
  }
  
  // Add click event listeners to all nav-pill items
  document.querySelectorAll('.nav-toggle').forEach(item => {
    item.addEventListener('click', function () {
      const section = this.classList.contains('project')
        ? 'project'
        : this.classList.contains('about')
        ? 'about'
        : 'resume';
      setActive(section);
    });
  });
  
  // event listeners for mobile navigation toggling:
  const menuButton = document.querySelector('.nav-menu-button');
  const mobileMenu = document.querySelector('.mobile-popup-menu');
  
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
  
  
  
  // JavaScript for .nav-menu-button and .mobile-popup-menu functionality
  document.addEventListener('DOMContentLoaded', () => {
  const navMenuButton = document.querySelector('.nav-menu-button');
  const mobilePopupMenu = document.querySelector('.mobile-popup-menu');
  
  if (navMenuButton && mobilePopupMenu) {
    // Initially hide the mobile popup menu
    mobilePopupMenu.style.display = 'none';
  
    // Add click event listener to toggle the visibility
    navMenuButton.addEventListener('click', () => {
      if (mobilePopupMenu.style.display === 'none') {
        mobilePopupMenu.style.display = 'flex'; // Show menu
      } else {
        mobilePopupMenu.style.display = 'none'; // Hide menu
      }
    });
  }
  });
  
  
  // Close Popup Menu on Click Outside or ESC
  document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".nav-menu-button");
  const popupMenu = document.querySelector(".mobile-popup-menu");
  
  // Toggle mobile menu
  menuButton.addEventListener("click", () => {
      popupMenu.classList.toggle("show");
  });
  
  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
      if (!popupMenu.contains(event.target) && !menuButton.contains(event.target)) {
          popupMenu.classList.remove("show");
      }
  });
  
  // Close menu on ESC key press
  document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
          popupMenu.classList.remove("show");
      }
  });
  });
  
  
  // Select the menu button and the icons
  const menuButton1 = document.querySelector('.nav-menu-button');
  const contactIcon = document.querySelector('.icon-contact');
  const contactCloseIcon = document.querySelector('.icon-contact-close');
  
  // Add click event listener
  menuButton1.addEventListener('click', () => {
  // Toggle visibility of the icons with smooth transition
  if (contactIcon.style.opacity === '1') {
    contactIcon.style.opacity = '0';
    contactIcon.style.transform = 'rotate(90deg)';
    contactCloseIcon.style.opacity = '1';
    contactCloseIcon.style.transform = 'rotate(0deg)';
  } else {
    contactIcon.style.opacity = '1';
    contactIcon.style.transform = 'rotate(0deg)';
    contactCloseIcon.style.opacity = '0';
    contactCloseIcon.style.transform = 'rotate(90deg)';
  }
  });
  
  // Ensure transitions are smooth in CSS
  const styles = `
  .icon-contact, .icon-contact-close {
  transition: opacity 0.3s ease, transform 0.3s ease;
  }
  `;
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
  
  
  const menuButton3 = document.querySelector('.nav-menu-button');
  const popupMenu = document.querySelector('.mobile-popup-menu');
  
  menuButton3.addEventListener('click', () => {
    popupMenu.classList.toggle('show');
    menuButton3.classList.toggle('active');
  });
  
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
  });
  
  // navbar_final.js
  document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".nav-menu-button");
  const mobileMenu = document.querySelector(".mobile-popup-menu");
  
  menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
      menuButton.classList.toggle("active");
  });
  });
  
  document.getElementById('logo').addEventListener('click', function() {
    window.location.href = "http://127.0.0.1:3000/greet.html"; // Redirect to greet.html
  });
  
   
//   JS FOR INFOPAGE

// Function to animate elements when they come into the viewport using IntersectionObserver
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Stop observing once animation is applied
            }
        });
    });

    // Select elements to animate
    const elementsToAnimate = document.querySelectorAll('.container-hero-image-landing.info-hero-landing, .homepage-text-section-landing');
    elementsToAnimate.forEach((element) => {
        observer.observe(element);
    });
}

// Add the animation class on page load or scroll
window.addEventListener('load', setupScrollAnimations);


document.addEventListener('DOMContentLoaded', function () {
    const quoteContainer = document.querySelector('.quote-container-middle');

    // Create an intersection observer to detect when the element enters the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation when the quote container is in view
                quoteContainer.style.opacity = '1';
                quoteContainer.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.5 // Trigger animation when 50% of the element is visible
    });

    observer.observe(quoteContainer);
});


// Hover Effects for Project Cards
document.querySelectorAll('.project-card.modern').forEach((card, index, cards) => {
    const image = card.querySelector('.project-image.modern');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - image.offsetWidth / 2;
        const y = e.clientY - rect.top - image.offsetHeight / 2;

        // Clamp the movement within the card
        const clampedX = Math.max(0, Math.min(x, rect.width - image.offsetWidth));
        const clampedY = Math.max(0, Math.min(y, rect.height - image.offsetHeight));

        image.style.left = `${clampedX}px`;
        image.style.top = `${clampedY}px`;
    });

    card.addEventListener('mouseleave', () => {
        image.style.opacity = '0';
        image.style.pointerEvents = 'none';
    });

    card.addEventListener('mouseenter', () => {
        cards.forEach(otherCard => {
            const otherImage = otherCard.querySelector('.project-image.modern');
            if (otherImage !== image) {
                otherImage.style.opacity = '0';
                otherImage.style.pointerEvents = 'none';
            }
        });

        image.style.opacity = '1';
        image.style.pointerEvents = 'auto';
    });
});

// Intersection Observer for Visibility Animations
document.querySelectorAll('.project-card.modern').forEach(card => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });
    observer.observe(card);
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Staggered Animation Delays for Cards
const cards = document.querySelectorAll('.project-card.modern');
cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
});

// Intersection Observer for View More Button
const viewMoreButton = document.querySelector('.btn-container.modern');
if (viewMoreButton) {
    const buttonObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                viewMoreButton.classList.add('visible');
            } else {
                viewMoreButton.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });
    buttonObserver.observe(viewMoreButton);
}

// Select the button and the transition overlay
const button = document.querySelector('.btn.btn-normal.modern');
const overlay = document.querySelector('.transition-overlay');

// Trigger transition effect on button click
button.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent the default anchor behavior
    
    // Activate the overlay transition
    overlay.classList.add('active');
    
    // Add body transition for smooth upward effect
    document.body.classList.add('transitioning');
    
    // Redirect after the transition effect completes
    setTimeout(() => {
        window.location.href = 'http://127.0.0.1:3000/projectpage.html';
    }, 800); // Match CSS transition time (0.8s)
});


// JS FOR TECHSTACK

document.addEventListener("DOMContentLoaded", () => {
    const techStackWrapper = document.querySelector('.tech-stack-wrapper-language');

    const onScroll = () => {
        const wrapperPosition = techStackWrapper.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // Check if the element is in the viewport
        if (wrapperPosition < screenHeight * 0.8) { // Adjust threshold as needed
            techStackWrapper.classList.add('scroll-visible');
        }
    };

    // Listen for scroll events
    window.addEventListener("scroll", onScroll);

    // Trigger on page load
    onScroll();
});



// Function to check if an element is in the viewport
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}



// Event listener to trigger on scroll
window.addEventListener('scroll', revealOnScroll);

// Initial check in case elements are already in view on page load
window.addEventListener('load', revealOnScroll);


// JS FOR FOOTER SECTION

// Function to check if an element is in the viewport
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to apply the 'visible' class to elements in the viewport
function revealOnScroll() {
    const footerCols = document.querySelectorAll('.footer-col');
    const footerHeadings = document.querySelectorAll('.footer-heading');
    const footerTop = document.querySelector('.footer-top');
    const footerBottom = document.querySelector('.footer-bottom');
    const nameBanner = document.querySelector('.footer-name-banner');

    footerCols.forEach((col) => {
        if (isElementInView(col)) {
            col.classList.add('visible');
        }
    });

    footerHeadings.forEach((heading) => {
        if (isElementInView(heading)) {
            heading.classList.add('visible');
        }
    });

    // Check visibility for footer-top, footer-bottom, and name-banner
    if (isElementInView(footerTop)) {
        footerTop.classList.add('visible');
    }

    if (isElementInView(footerBottom)) {
        footerBottom.classList.add('visible');
    }

    if (isElementInView(nameBanner)) {
        nameBanner.classList.add('visible');
    }
}

// Event listener to trigger on scroll
window.addEventListener('scroll', revealOnScroll);

// Initial check in case elements are already in view on page load
window.addEventListener('load', revealOnScroll);
