
const firstInput = document.getElementById('input1');
const secondInput = document.getElementById('input2');
const addPress = document.getElementById('add');
const subtractPress = document.getElementById('subtract');
const multiplyPress = document.getElementById('multiply');
const dividePress = document.getElementById('divide');
const numsMath = document.getElementById('nums-math');

addPress.addEventListener('click', () => {
    const number1 = Number(firstInput.value);
    const number2 = Number(secondInput.value);
    numsMath.textContent = number1 + number2;
});

subtractPress.addEventListener('click', () => {
    const number1 = Number(firstInput.value);
    const number2 = Number(secondInput.value);
    numsMath.textContent = number1 - number2;
});

multiplyPress.addEventListener('click', () => {
    const number1 = Number(firstInput.value);
    const number2 = Number(secondInput.value);
    numsMath.textContent = number1 * number2;
});

dividePress.addEventListener('click', () => {
    const number1 = Number(firstInput.value);
    const number2 = Number(secondInput.value);
    numsMath.textContent = number1 / number2;
});