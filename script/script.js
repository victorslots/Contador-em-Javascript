var currentNumberItem = document.getElementById('CurrentNumber');
var currentNumber = 0;

function decrementa() {
    currentNumber = currentNumber - 1;
    currentNumberItem.innerHTML = currentNumber;
}

function incrementa() {
    currentNumber = currentNumber + 1;
    currentNumberItem.innerHTML = currentNumber;
}