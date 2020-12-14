const sliderElement = document.querySelector('#credit-slider');
const creditInput = document.getElementById('credit-input');


sliderElement.addEventListener('input', (e) => {
  document.getElementById('credit-input').value = sliderElement.value + " " + "P";
});

creditInput.addEventListener('input', (e) => {
  sliderElement.value = creditInput.value;
  console.log("creditInput", creditInput.value);
});




// function rangeValFunc(rangeVal){
//   var rangeWidth = document.getElementById("tooltiptext").textContent = rangeVal+"cm";
//   document.getElementById("tooltiptext").style.left = "calc("+rangeVal+"% - 50px)";
// }
