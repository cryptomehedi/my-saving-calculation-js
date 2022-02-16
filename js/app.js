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
        if(totalCost <= incomeInputNum ){
        document.querySelector('#total-cost').innerText = totalCost;
        // *rest balance 
        const restBalance = incomeInputNum - totalCost;
        restValue.innerText = restBalance;
        displayAlert('');
        }else{
            document.querySelector('#total-cost').innerText = 0;
            restValue.innerText = 0;
            displayAlert('Your Expenses Is More Then Your Income');
        }
    }else if(incomeInputNum <= 0 || incomeInput.value =='' || isNaN(incomeInput.value)){
        displayAlert('please put valid Income amount');
    }else if(foodInputNum <= 0 || foodInput.value =='' || isNaN(foodInput.value)){
        displayAlert('please put valid Food amount');
    }else if(rentInputNum<= 0 || rentInput.value =='' || isNaN(rentInput.value)){
        displayAlert('please put valid Rent amount');
    }else if(clothesInputNum <= 0 || clothesInput.value =='' || isNaN(clothesInput.value)){
        displayAlert('please put valid Cloth amount');
    }
    else{
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
    const remainingBalance = restValue.innerText - savingAmount;
    if( remainingBalance < 0 ){
        displayAlert('Your Saving is Less then Your Expenses');
        document.querySelector('#saving-amount').innerText = 0;
        document.querySelector('#remaining-balance').innerText = 0;
    }else{
        document.querySelector('#saving-amount').innerText = savingAmount;
        // *remaining balance calculation
        document.querySelector('#remaining-balance').innerText = remainingBalance;
    }
});

// * display alert 
function displayAlert(text) {
    alert.textContent = text;
}


function l(a){
    console.log(a);
};