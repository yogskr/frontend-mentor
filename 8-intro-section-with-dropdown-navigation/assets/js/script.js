'use strict';

// ===== Mobile hamburger menu =====

// Get reference from the hamburger menu
const hamburgerBtnOpen = document.querySelector('.hamburger-btn-open');
const hamburgerBtnClose = document.querySelector('.hamburger-btn-close');
const slideMenu = document.querySelector('.slide-menu');
const overlay = document.querySelector('.overlay');

// Add the click event listener to the hamburger menu
hamburgerBtnOpen.addEventListener('click', () => {
  slideMenu.classList.toggle('flex');
  slideMenu.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

// Add the click event listener to the hamburger menu
hamburgerBtnClose.addEventListener('click', () => {
  slideMenu.classList.toggle('flex');
  slideMenu.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

// ===== Mobile drop-down menu =====

// Get reference from the mobile Features menu
const featuresDropDownMenu = document.querySelector('.features-drop-down-menu');
const featuresSubNavMenu = document.querySelector('.features-sub-nav-link');
const featuresArrowDown = document.querySelector('.features-arrow-down');
const featuresArrowUp = document.querySelector('.features-arrow-up');

// Add click event listener to the mobile Features menu
featuresDropDownMenu.addEventListener('click', () => {
  featuresSubNavMenu.classList.toggle('hidden');
  featuresArrowDown.classList.toggle('hidden');
  featuresArrowUp.classList.toggle('hidden');
});

// Get reference from the mobile Company menu
const companyDropDownMenu = document.querySelector('.company-drop-down-menu');
const companySubNavMenu = document.querySelector('.company-sub-nav-link');
const companyArrowDown = document.querySelector('.company-arrow-down');
const companyArrowUp = document.querySelector('.company-arrow-up');

// Add click event listener to the mobile Company menu
companyDropDownMenu.addEventListener('click', () => {
  companySubNavMenu.classList.toggle('hidden');
  companyArrowDown.classList.toggle('hidden');
  companyArrowUp.classList.toggle('hidden');
});

// ===== Desktop drop-down menu =====

// Get reference from the deskop Features menu
const desktopFeaturesMenu = document.querySelector('.desktop-features-menu');
const desktopFeaturesSub = document.querySelector('.desktop-features-sub-menu');
const desktopFeaturesUp = document.querySelector('.desktop-features-up');
const desktopFeaturesDown = document.querySelector('.desktop-features-down');

// Get reference from the desktop Company menu
const desktopCompanyMenu = document.querySelector('.desktop-company-menu');
const desktopCompanySub = document.querySelector('.desktop-company-sub-menu');
const desktopCompanyUp = document.querySelector('.desktop-company-up');
const desktopCompanyDown = document.querySelector('.desktop-company-down');

// Add click event listener to the desktop Features menu
desktopFeaturesMenu.addEventListener('click', () => {
  desktopFeaturesSub.classList.toggle('hidden');
  desktopFeaturesDown.classList.toggle('hidden');
  desktopFeaturesUp.classList.toggle('hidden');

  if (!desktopCompanyMenu.classList.contains('hidden')) {
    desktopCompanySub.classList.add('hidden');
  } else {
    return false;
  }
});

// Add the keypress event listener to the desktop Features menu
desktopFeaturesMenu.addEventListener('keydown', (e) => {
  const escapeKey = e.keyCode;
  if (escapeKey === 27) {
    desktopFeaturesSub.classList.add('hidden');
    desktopFeaturesDown.classList.remove('hidden');
    desktopFeaturesUp.classList.add('hidden');
  }
});

// Add the click event listener to the desktop Company menu
desktopCompanyMenu.addEventListener('click', () => {
  desktopCompanySub.classList.toggle('hidden');
  desktopCompanyUp.classList.toggle('hidden');
  desktopCompanyDown.classList.toggle('hidden');

  if (!desktopFeaturesMenu.classList.contains('hidden')) {
    desktopFeaturesSub.classList.add('hidden');
  } else {
    return false;
  }
});

// Add the keypress event listener to the desktop Company menu
desktopCompanyMenu.addEventListener('keydown', (e) => {
  const escapeKey = e.keyCode;
  if (escapeKey === 27) {
    desktopCompanySub.classList.add('hidden');
    desktopCompanyUp.classList.remove('hidden');
    desktopCompanyDown.classList.add('hidden');
  }
});
