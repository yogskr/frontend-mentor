const rateNum = document.querySelectorAll('.rate-number');
const submitBtn = document.getElementById('btn');

const resetRatings = () => {
  rateNum.forEach((rating) => {
    rating.classList.remove('active');
  });
};

for (let i = 0; i < rateNum.length; i++) {
  rateNum[i].addEventListener('click', () => {
    resetRatings();
    rateNum[i].classList.add('active');
  });

  submitBtn.addEventListener('click', () => {
    const main = document.getElementById('main');
    const aside = document.getElementById('aside');
    const submissionText = document.getElementById('rate-num');

    if (rateNum[i].classList.contains('active')) {
      main.style.opacity = '0';
      aside.style.opacity = '1';
      aside.style.zIndex = '1';

      submissionText.innerText = rateNum[i].innerText;
    }
  });
}
