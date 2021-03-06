const creditRange = document.querySelector('#credit-slider');
const creditInput = document.getElementById('credit-input');
let sumOfCredit = 300000;
const termInput = document.getElementById('term-input-id');
const termRange = document.getElementById('term-range-id');
const monthPaymentSpan = document.getElementById('month-payment');


creditRange.addEventListener('input', (e) => {
  sumOfCredit = creditRange.value;
  creditInput.value = creditRange.value;
  creditRange.step = customStep(creditRange.value);

  monthPayment();
});

creditInput.addEventListener('input', (e) => {
  creditRange.value = creditInput.value;
  sumOfCredit = creditInput.value;
  monthPayment();
});

termRange.addEventListener('input', (e) => {
  if(termRange.value < 12) {
    termInput.value = `${termRange.value} мес.`;
  } else {
    let years = (termRange.value / 12).toFixed();
    let months = termRange.value % 12;
    termInput.value = `${years} лет и ${months} мес.`;
  } 

  monthPayment();
});


function customStep(value) {
  var step = 50000;
  value = parseFloat(value);
  if (value > 3000000) { step = 500000}
  else if (value > 1000000) { step = 100000 }

  return step;
}


function monthPayment() {
 let sum = creditRange.value; // S
 let term = termRange.value; // T
 let percent = 8.8/12; // P

 let monthPayment = sum * (percent * Math.pow(1 + percent/100, term) / 100 / (Math.pow(1 + percent/100, term)-1));

  monthPaymentSpan.textContent = monthPayment.toFixed(2);
}
