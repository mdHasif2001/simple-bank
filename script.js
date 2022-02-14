// deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
    updateTotalFeild('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
    }
    if(depositAmount < 0){
        alert('Please input a positive number');
    }
})

// withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
   const withdrawAmount = getInputValue('withdraw-input');
   const currentBalance = getCurrentBalance();
   if(withdrawAmount > 0 && withdrawAmount < currentBalance){
   updateTotalFeild('withdraw-total', withdrawAmount);
   updateBalance(withdrawAmount, false);
   }
   if(withdrawAmount > currentBalance){
       alert("You don't have enough balance");
   }
   if(withdrawAmount < 0){
    alert('Please input a positive number');
    }
})

// input funtion
function getInputValue(inputId){
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputFeild.value = '';
    return amountValue;
}

// update input amount
function updateTotalFeild(totalField, amount){
    const totalElement = document.getElementById(totalField);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

// current balance
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

// update balance
function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}