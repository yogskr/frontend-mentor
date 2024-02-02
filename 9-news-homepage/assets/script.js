'use strict';

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger-menu');
const hamburgerCloseBtn = document.querySelector('.close-menu');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

// Show/Hide the navigation menu when clicking on the burger icon or close button
const navigationMenuOpen = () => {
  // Add class to show the navigation menu and display the overlay
  navMenu.classList.add('active-nav-menu');
  overlay.classList.add('active-overlay');
};

hamburger.addEventListener('click', navigationMenuOpen);

const navigationMenuClose = () => {
  // Close the navigation menu by removing the active classes from both the nav menu and the overlay
  navMenu.classList.remove('active-nav-menu');
  overlay.classList.remove('active-overlay');
};

hamburgerCloseBtn.addEventListener('click', navigationMenuClose);
