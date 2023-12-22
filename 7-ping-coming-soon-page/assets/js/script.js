'use strict';

// Custom error message
const submitBtn = document.getElementById('btn');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-message');
const originalText = errorMsg.innerText;

// Clear error message
function clearError() {
  errorMsg.classList.remove('active-error-msg');
  submitBtn.classList.remove('active-error-btn');
  emailInput.classList.remove('active-error-input');
  errorMsg.innerText = originalText;
}

// Toggle functionality on media query
const mediaQuery = window.matchMedia('(min-width: 768px)');

submitBtn.addEventListener('click', () => {
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

  if (emailInput.value === '') {
    errorMsg.innerText = 'Oops! You forgot to add your email';
    errorMsg.classList.add('active-error-msg');
    submitBtn.classList.add('active-error-btn');
    emailInput.classList.add('active-error-input');

    if (mediaQuery.matches) {
      submitBtn.classList.remove('active-error-btn');
    }

    setTimeout(() => {
      clearError();
    }, 2500);
  } else if (!emailInput.value.match(emailRegex)) {
    errorMsg.classList.add('active-error-msg');
    submitBtn.classList.add('active-error-btn');
    emailInput.classList.add('active-error-input');

    if (mediaQuery.matches) {
      submitBtn.classList.remove('active-error-btn');
    }

    setTimeout(() => {
      clearError();
    }, 2500);
  }
});
