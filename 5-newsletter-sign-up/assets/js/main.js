// Email validation
const emailInput = document.getElementById('email-input');
const errorMsg = document.getElementById('error-msg');
const submitBtn = document.getElementById('submit-btn');
const modalSuccessMsg = document.getElementById('success-msg');
const successEmailText = document.getElementById('email-address');
const headerEl = document.getElementById('header');
const mainEl = document.getElementById('signup-form');

const validateEmail = () => {
  let mailFormat =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let emailValue = emailInput.value;

  if (emailValue.match(mailFormat)) {
    modalSuccessMsg.classList.toggle('hidden');
    mainEl.classList.toggle('hidden');
    headerEl.classList.toggle('hidden');
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
    }, 2500);
  }
};

const displayErrorMsg = () => {};

submitBtn.addEventListener('click', validateEmail);
emailInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validateEmail();
  }
});

// Success Message Disnmissal
const dismissMsg = document.getElementById('close-btn');
const aside = document.getElementById('success-msg');

const closeModalWindow = () => {
  aside.classList.toggle('hidden');
  mainEl.classList.toggle('hidden');
  headerEl.classList.toggle('hidden');
  emailInput.value = '';
};

dismissMsg.addEventListener('click', closeModalWindow);
