window.onload = () => {
    document.body.classList.add("page-loaded");
};


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
    window.location.href = '/projects.html';
  } else if (section === 'about') {
    window.location.href = '/about.html';
  } else if (section === 'resume') {
    window.open('/Aditya_Agarwal_Resume.pdf', '_blank');
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
  window.location.href = "/index.html"; // Redirect to greet.html
});

 
