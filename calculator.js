let loanAmount = document.querySelector("#loan-amount");
let loanYear = document.querySelector("#loan-years");
let loanRate = document.querySelector("#loan-rate");
let loanCal =document.querySelector("#calc-submit");
let finalMP =document.querySelector("#monthly-payment");
let monthPay = 0;
let values;

window.addEventListener('DOMContentLoaded', function(e) {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(loanAmount.value),
    years: +(loanYear.value),
    rate: +(loanRate.value)
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  loanAmount.value = 10000;
  loanYear.value = 8;
  loanRate.value = 5.8;
  update();
}
// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));  
}

// Given an object of values (a value has amount, years and rate ), (values['amount'] * (values['rate'] / 12))
// calculate the monthly payment.  The output should be a string.  (1 - ((1+(values['rate'] / 12)) ** (-(values['years'] * 12))));
// that always has 2 decimal places. (Math.pow((1+(values['rate'] / 12)), -((values['years'] * 12))))
function calculateMonthlyPayment(values) {
  values = getCurrentUIValues();
monthPay = (values['amount'] * (values['rate'] / 1200))/(1- (((1+(values['rate'] / 1200)) ** -((values['years'] * 12)))));
monthPay = monthPay.toFixed(2);
monthPay = monthPay.toString();
return monthPay;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyP = document.getElementById("monthly-payment");
  monthlyP.innerText = "$" + monthly;
}

loanCal.addEventListener('click', function(e){
  e.preventDefault();
  update();
  });