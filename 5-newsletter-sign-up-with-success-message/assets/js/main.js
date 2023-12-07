'use strict';

// Email validation
const header = document.getElementById('header');
const main = document.getElementById('signup-form');
const emailInput = document.getElementById('email-input');
const errorMsg = document.getElementById('error-msg');
const submitBtn = document.getElementById('submit-btn');
const modalSuccessMsg = document.getElementById('success-msg');
const successEmailText = document.getElementById('email-address');

const validateEmail = () => {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailValue = emailInput.value;

  if (emailValue.match(mailFormat)) {
    modalSuccessMsg.classList.toggle('hidden');
    main.classList.toggle('hidden');
    header.classList.toggle('hidden');
    successEmailText.innerText = emailInput.value;
  } else if (!emailValue.match(mailFormat)) {
    errorMsg.style.display = 'block';
    emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
    emailInput.style.backgroundColor = 'rgba(255, 87, 135, 0.1)';
    emailInput.style.color = 'hsl(4, 100%, 67%)';

    const clearErrorMsg = () => {
      errorMsg.style.display = 'none';
      emailInput.style.border = '';
      emailInput.style.backgroundColor = '';
      emailInput.style.color = '';
      emailInput.value = '';
    };

    setTimeout(() => {
      clearErrorMsg();
    }, 3000);
  }
};

submitBtn.addEventListener('click', validateEmail);

// Success Message Disnmissal
const dismissMsg = document.getElementById('close-btn');
const aside = document.getElementById('success-msg');

const closeModalWindow = () => {
  aside.classList.toggle('hidden');
  main.classList.toggle('hidden');
  header.classList.toggle('hidden');
  emailInput.value = '';
};

dismissMsg.addEventListener('click', closeModalWindow);
