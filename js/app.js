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
const alert2 = document.querySelector('.alert2-text');

// *calculation button
calculatorButton.addEventListener('click',function(e){
    e.preventDefault();
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
        document.querySelector('#saving-amount').innerText = 0;
        document.querySelector('#remaining-balance').innerText = 0;
        displayAlert2('');
        }else{
            document.querySelector('#total-cost').innerText = 0;
            restValue.innerText = 0;
            displayAlert('Your Expenses Is More Then Your Income');
            document.querySelector('#saving-amount').innerText = 0;
            document.querySelector('#remaining-balance').innerText = 0;
            displayAlert2('');
        };
    }else if(incomeInputNum <= 0 || incomeInput.value =='' || isNaN(incomeInput.value)){
        displayAlert('Please Put Valid Income Amount.');
        document.querySelector('#saving-amount').innerText = 0;
        document.querySelector('#remaining-balance').innerText = 0;
        displayAlert2('');
    }else if(foodInputNum <= 0 || foodInput.value =='' || isNaN(foodInput.value)){
        displayAlert('Please Put Valid Food Amount.');
        document.querySelector('#saving-amount').innerText = 0;
        document.querySelector('#remaining-balance').innerText = 0;
        displayAlert2('');
    }else if(rentInputNum<= 0 || rentInput.value =='' || isNaN(rentInput.value)){
        displayAlert('Please Put Valid Rent Amount.');
        document.querySelector('#saving-amount').innerText = 0;
        document.querySelector('#remaining-balance').innerText = 0;
        displayAlert2('');
    }else if(clothesInputNum <= 0 || clothesInput.value =='' || isNaN(clothesInput.value)){
        displayAlert('Please Put Valid Clothes Amount.');
        document.querySelector('#saving-amount').innerText = 0;
        document.querySelector('#remaining-balance').innerText = 0;
        displayAlert2('');
    }
    else{
        displayAlert('please put valid amount');
        document.querySelector('#saving-amount').innerText = 0;
        document.querySelector('#remaining-balance').innerText = 0;
        displayAlert2('');
    }
});

// *saving button 
saveButton.addEventListener('click',function(e){
    e.preventDefault();
    // *text to number convert
    const incomeInputNum = parseInt(incomeInput.value) 
    const saveInputNum = parseInt(saveInput.value);
    if(saveInputNum >= 0){
        // *percentage calculation
        savePercentage = saveInputNum / 100;
        // *saving amount calculation 
        const savingAmount = incomeInputNum * savePercentage;
        // *remaining balance calculation
        const remainingBalance = restValue.innerText - savingAmount;
        if( remainingBalance < 0 ){
            displayAlert2('Your Remaining Balance is Less then Your Saving Balance');
            document.querySelector('#saving-amount').innerText = savingAmount;
            
            document.querySelector('#remaining-balance').innerText = remainingBalance;
        }else if(!isNaN(saveInput.value)){
            document.querySelector('#saving-amount').innerText = 0;
            // *remaining balance calculation
            document.querySelector('#remaining-balance').innerText = 0;
            displayAlert2('Please Complete Your Calculation');
        }
        else {
            document.querySelector('#saving-amount').innerText = savingAmount;
            // *remaining balance calculation
            document.querySelector('#remaining-balance').innerText = remainingBalance;
            displayAlert2('');
        }
    }else{
        document.querySelector('#saving-amount').innerText = 0;
        document.querySelector('#remaining-balance').innerText = 0;
        displayAlert2('Please Put valid Saving Percentage');
    }
});

// * display alert 
function displayAlert(text) {
    alert.textContent = text;
}
function displayAlert2(text) {
    alert2.textContent = text;
}
