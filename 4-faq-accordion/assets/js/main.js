'use strict';

const question = document.querySelectorAll('.question');
const plusIcon = document.querySelectorAll('.plus-icon');
const minusIcon = document.querySelectorAll('.minus-icon');
const answer = document.querySelectorAll('.answer');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', () => {
    // Show or hide the (+) and (-) icons respectively
    minusIcon[i].classList.toggle('active');
    plusIcon[i].classList.toggle('hidden');

    // Show or hide the content from the answer variable and add animated slide effect
    if (answer[i].style.maxHeight) {
      answer[i].style.maxHeight = null;
    } else {
      answer[i].style.maxHeight = answer[i].scrollHeight + 'px';
    }
  });
}
