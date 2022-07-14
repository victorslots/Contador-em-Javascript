var currentNumberItem = document.getElementById('CurrentNumber');
var currentNumber = 0;

function decrementa() {
    if(currentNumber <= 0 ) {
        currentNumberberItem = document.getElementById('CurrentNumber').style.color = "red";
    }else{
    
    currentNumber = currentNumber - 1;
    currentNumberItem.innerHTML = currentNumber;
    }
}

function incrementa() {
    if(currentNumber >= 10){
        currentNumberberItem = document.getElementById('CurrentNumber').style.color = "red";
    }else{
    currentNumber = currentNumber + 1;
    currentNumberItem.innerHTML = currentNumber;
    currentNumberberItem = document.getElementById('CurrentNumber').style.color = "black";
    }
}