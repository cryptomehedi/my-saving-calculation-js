// *select all id 
const incomeInput = document.querySelector('#income-input');
const foodInput = document.querySelector('#food-input');
const rentInput = document.querySelector('#rent-input');
const clothesInput = document.querySelector('#clothes-input');
const saveInput = document.querySelector('#save-input');
const calculatorButton = document.querySelector('#calculator-button');
const saveButton = document.querySelector('#save-button');
const restValue = document.querySelector('#rest-balance');
const alert = document.querySelector('.alert-text');

// *calculation button
calculatorButton.addEventListener('click',function(){
    // *text to number convert
    const incomeInputNum = parseInt(incomeInput.value) ;
    const foodInputNum = parseInt(foodInput.value);
    const rentInputNum = parseInt(rentInput.value);
    const clothesInputNum = parseInt(clothesInput.value);

    if( incomeInputNum >= 0 && foodInputNum >= 0 && rentInputNum >= 0 && clothesInputNum >= 0){
        // *total cost calculation
        const totalCost = foodInputNum + rentInputNum + clothesInputNum;
        document.querySelector('#total-cost').innerText = totalCost;
        // *rest balance 
        const restBalance = incomeInputNum - totalCost;
        restValue.innerText = restBalance;
    }else{
        displayAlert('please put valid amount');
    }
});

// *saving button 
saveButton.addEventListener('click',function(){
    // *text to number convert
    const incomeInputNum = parseInt(incomeInput.value) 
    const saveInputNum = parseInt(saveInput.value);
    // *percentage calculation
    savePercentage = saveInputNum / 100;
    // *saving amount calculation 
    const savingAmount = incomeInputNum * savePercentage;
    document.querySelector('#saving-amount').innerText = savingAmount;
    // *remaining balance calculation
    const remainingBalance = restValue.innerText - savingAmount;
    document.querySelector('#remaining-balance').innerText = remainingBalance;
});

function displayAlert(text) {
    alert.textContent = text;
    // remove alert
    setTimeout(function () {
    alert.textContent = "";
    }, 2000);
}


function l(a){
    console.log(a);
};