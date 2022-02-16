// *select all id 
const incomeInput = document.querySelector('#income-input');
const foodInput = document.querySelector('#food-input');
const rentInput = document.querySelector('#rent-input');
const clothesInput = document.querySelector('#clothes-input');
const saveInput = document.querySelector('#save-input');
const calculatorButton = document.querySelector('#calculator-button');
const saveButton = document.querySelector('#save-button');
const restValue = document.querySelector('#rest-balance');

calculatorButton.addEventListener('click',function(){
    // *text to number convert
    const incomeInputNum = parseInt(incomeInput.value) ;
    const foodInputNum = parseInt(foodInput.value);
    const rentInputNum = parseInt(rentInput.value);
    const clothesInputNum = parseInt(clothesInput.value);

    // *total cost calculation
    const totalCost = foodInputNum + rentInputNum + clothesInputNum;
    document.querySelector('#total-cost').innerText = totalCost;
    // *rest balance 
    const restBalance = incomeInputNum - totalCost;
    restValue.innerText = restBalance;
});


saveButton.addEventListener('click',function(){
    const incomeInputNum = parseInt(incomeInput.value) 
    const saveInputNum = parseInt(saveInput.value);
    savePercentage = saveInputNum / 100;
});
