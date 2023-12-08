// Email validation
const emailInput = document.getElementById('email-input');
const errorMsg = document.getElementById('error-msg');
const warningMsg = document.getElementById('warning-msg');
const submitBtn = document.getElementById('submit-btn');
const modalSuccessMsg = document.getElementById('success-msg');
const successEmailText = document.getElementById('email-address');
const headerEl = document.getElementById('header');
const mainEl = document.getElementById('signup-form');

const clearCustomMsg = () => {
  warningMsg.style.display = 'none';
  errorMsg.style.display = 'none';
  emailInput.classList.toggle('custom-msg');
  emailInput.value = '';
};

const validateEmail = () => {
  const mailFormat =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  let emailValue = emailInput.value;

  if (emailValue.match(mailFormat)) {
    modalSuccessMsg.classList.toggle('hidden');
    mainEl.classList.toggle('hidden');
    headerEl.classList.toggle('hidden');
    successEmailText.innerText = emailInput.value;
  } else if (emailValue == '') {
    errorMsg.style.display = 'none';
    warningMsg.style.display = 'flex';
    emailInput.classList.toggle('custom-msg');

    setTimeout(() => {
      clearCustomMsg();
    }, 2500);
  } else if (!emailValue.match(mailFormat)) {
    errorMsg.style.display = 'flex';
    emailInput.classList.toggle('custom-msg');

    setTimeout(() => {
      clearCustomMsg();
    }, 2500);
  }
};

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
