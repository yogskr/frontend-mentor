'use strict';

// ===== Hamburger menu =====
const hamburgerBtnOpen = document.querySelector('.hamburger-btn-open');
const hamburgerBtnClose = document.querySelector('.hamburger-btn-close');
const slideMenu = document.querySelector('.slide-menu');
const overlay = document.querySelector('.overlay');

hamburgerBtnOpen.addEventListener('click', () => {
  slideMenu.classList.toggle('flex');
  slideMenu.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

hamburgerBtnClose.addEventListener('click', () => {
  slideMenu.classList.toggle('flex');
  slideMenu.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

// ===== Mobile drop-down menu =====

// Get reference from Features
const featuresDropDownMenu = document.querySelector('.features-drop-down-menu');
const featuresSubNavMenu = document.querySelector('.features-sub-nav-link');
const featuresArrowDown = document.querySelector('.features-arrow-down');
const featuresArrowUp = document.querySelector('.features-arrow-up');

// Add click event listener to Features
featuresDropDownMenu.addEventListener('click', () => {
  featuresSubNavMenu.classList.toggle('hidden');
  featuresArrowDown.classList.toggle('hidden');
  featuresArrowUp.classList.toggle('hidden');
});

// Get reference from Company
const companyDropDownMenu = document.querySelector('.company-drop-down-menu');
const companySubNavMenu = document.querySelector('.company-sub-nav-link');
const companyArrowDown = document.querySelector('.company-arrow-down');
const companyArrowUp = document.querySelector('.company-arrow-up');

// Add click event listener to Company
companyDropDownMenu.addEventListener('click', () => {
  companySubNavMenu.classList.toggle('hidden');
  companyArrowDown.classList.toggle('hidden');
  companyArrowUp.classList.toggle('hidden');
});

// ===== Desktop drop-down menu =====
