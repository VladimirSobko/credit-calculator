const creditRange = document.querySelector('#credit-slider');
const creditInput = document.getElementById('credit-input');
let sumOfCredit = 300000;
let term = 1;
const termInput = document.getElementById('term-input-id');
const termRange = document.getElementById('term-range-id');
let rate = 8.8 / 12;
let mounthPay = 0; 

function getMounthPay() {
  mounthPay =  sumOfCredit * (rate * Math.pow(1 + rate / 100, term) / 100 / (Math.pow(1 + rate / 100, term) - 1));
  console.log("mounthPay", Math.round(mounthPay));
  document.getElementById('mounth-pay-id').textContent = `Ваш ежемесячный платеж * - ${mounthPay.toFixed(0)} ₽`
}

// S - сумма кредита, руб.
// T - срок кредита, мес.
// P = 8.8 / 12 - ставка в месяц
// S * (P * Math.pow(1 + P / 100, T) / 100 / (Math.pow(1 + P / 100, T) - 1))
// При изменении полей “Желаемая сумма кредита” и “Срок кредита” необходимо рассчитывать ежемесячный платеж и выводить на форме

creditRange.addEventListener('input', (e) => {
  sumOfCredit = creditRange.value;
  creditInput.value = creditRange.value + " " + "P";
  getMounthPay();
});

creditInput.addEventListener('input', (e) => {
  creditRange.value = creditInput.value;
});

termRange.addEventListener('input', (e) => {
  if(termRange.value < 12) {
    term = termRange.value;
    termInput.value = `${termRange.value} мес.`;
  } else if(termRange.value >= 12) {
    const max = 20 * 12;
    term = (max - (max - termRange.value));
    termInput.value = term;
    getMounthPay();
  } 
});
