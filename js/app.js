// *select all id 
const incomeInput = element('#income-input');
const foodInput = element('#food-input');
const rentInput = element('#rent-input');
const clothesInput = element('#clothes-input');
const saveInput = element('#save-input');
const calculatorButton = element('#calculator-button');
const saveButton = element('#save-button');
const restValue = element('#rest-balance');
const alert = element('.alert-text');
const alert2 = element('.alert2-text');

// *call element function
function element(param){
    return document.querySelector(param);
};

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
        calculation();
        displayAlert2('');
        }else{
            calculationZero();
            displayAlert('Your Expenses Is More Then Your Income');
            calculation();
            displayAlert2('');
        };
    }else if(incomeInputNum <= 0 || incomeInput.value =='' || isNaN(incomeInput.value)){
        displayAlert('Please Put Valid Income Amount.');
        calculationZero();
        calculation();
        displayAlert2('');
    }else if(foodInputNum <= 0 || foodInput.value =='' || isNaN(foodInput.value)){
        calculationZero();
        displayAlert('Please Put Valid Food Amount.');
        calculation();
        displayAlert2('');
    }else if(rentInputNum<= 0 || rentInput.value =='' || isNaN(rentInput.value)){
        calculationZero();
        displayAlert('Please Put Valid Rent Amount.');
        calculation();
        displayAlert2('');
    }else if(clothesInputNum <= 0 || clothesInput.value =='' || isNaN(clothesInput.value)){
        calculationZero();
        displayAlert('Please Put Valid Clothes Amount.');
        calculation();
        displayAlert2('');
    }else{
        calculationZero();
        displayAlert('please put valid amount');
        calculation();
        displayAlert2('');
    }
});

// *saving button 
saveButton.addEventListener('click',function(e){
    e.preventDefault();

    // *text to number convert
    const incomeInputNum = parseInt(incomeInput.value);
    const saveInputNum = parseInt(saveInput.value);
    const restValueNum = parseInt(restValue.innerText);

    if(saveInputNum >= 0){

        // *percentage calculation
        savePercentage = saveInputNum / 100;

        // *saving amount calculation 
        const savingAmount = incomeInputNum * savePercentage;

        // *remaining balance calculation
        const remainingBalance = restValueNum - savingAmount;

        // *savingCalculation display
        function savingCalculation(){
            document.querySelector('#saving-amount').innerText = savingAmount;
             // *remaining balance calculation
            document.querySelector('#remaining-balance').innerText = remainingBalance;
        };

        if( remainingBalance < 0 ){
            displayAlert2('Your Remaining Balance is Less then Your Saving Balance');
            savingCalculation();
        }else if( restValueNum == 0 ){
            displayAlert2("You Don't Have Enough Money For Saving");
            document.querySelector('#saving-amount').innerText = 0;
            document.querySelector('#remaining-balance').innerText = 0;
        }else {
            savingCalculation();
            displayAlert2('');
        };
    }else if (restValue.innerText){
        document.querySelector('#saving-amount').innerText = 0;
        document.querySelector('#remaining-balance').innerText = 0;
        displayAlert2('Please Put valid Saving Percentage');
    };
});

// * display alert 
function displayAlert(text) {
    alert.textContent = text;
};
function displayAlert2(text) {
    alert2.textContent = text;
};
// *cost calculation display
function calculation(){
    document.querySelector('#saving-amount').innerText = 0;
    document.querySelector('#remaining-balance').innerText = 0;
};
function calculationZero(){
    document.querySelector('#total-cost').innerText = 0;
    restValue.innerText = 0;
};

