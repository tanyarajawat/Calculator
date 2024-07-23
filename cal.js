//const display = document.getElementById("display");

function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Use of eval is kept here for simplicity; consider safer alternatives in practice
    } catch (error) {
        display.value = 'Error';
    }
}