//get th ui elements
let amount = document.getElementById('amount');
let term = document.getElementById('term');
let amountInput = document.getElementById('amountInput');
let termInput = document.getElementById('termInput');
let totalInterest =document.getElementById('totalInterest');
let rate = document.getElementById('rate');
let monthlyInstallment =document.getElementById('monthlyInstallment');
let interest =document.getElementById('interest');
let interstInput = document.getElementById('InterestInput');
let total = document.getElementById('totalPayment');

const Slider = () =>{
    amountInput.value = amount.value;
    termInput.value = term.value;
    interestInput.value = interest.value
}

//add eventslistener
(function (){
    amount.addEventListener('input', Slider);
    amount.addEventListener('change', Slider);
    term.addEventListener('input', Slider);
    term.addEventListener('change', Slider);
    interest.addEventListener('input', Slider);
    interestInput.addEventListener('change', Slider);
    //Printing Calculations
    amount.addEventListener('input', Calculate);
    amount.addEventListener('change', Calculate);
    term.addEventListener('input', Calculate);
    term.addEventListener('change', Calculate);
    interest.addEventListener('input', Calculate);
    interestInput.addEventListener('change', Calculate);
})();


function Calculate(){
    const principal = amount.value
    //return principal;
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const payments = parseFloat(term.value) * 12;

    //calculate monthly payments
    const x = Math.pow(1 + calculatedInterest, payments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    if(isFinite(monthly)){
        monthlyInstallment.innerHTML =`R - ${monthly.toFixed(2)}`;
        total.innerHTML = `R - ${(monthly * payments).toFixed(2)}`;
        totalInterest.innerHTML = `R - ${((monthly * payments) - principal).toFixed(2)}`;
        rate.innerHTML = `${interest.value}%`;
    }
}

console.log(calculate());