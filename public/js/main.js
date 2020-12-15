const creditRange = document.querySelector('#credit-slider');
const creditInput = document.getElementById('credit-input');
let sumOfCredit = 300000;
const termInput = document.getElementById('term-input-id');
const termRange = document.getElementById('term-range-id');



creditRange.addEventListener('input', (e) => {
  sumOfCredit = creditRange.value;
  creditInput.value = creditRange.value + " " + "P";
});

creditInput.addEventListener('input', (e) => {
  creditRange.value = creditInput.value;
});

termRange.addEventListener('input', (e) => {
  if(termRange.value < 12) {
    termInput.value = `${termRange.value} мес.`;
  } else if(termRange.value >= 12) {
    const max = 20 * 12;
    let countMounth = (max - (max - termRange.value));
    termInput.value = countMounth;
  } 
});
