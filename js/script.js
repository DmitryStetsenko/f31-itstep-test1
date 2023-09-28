const doc = document;

const btnHelloWorld = doc.querySelector('.btn-helloWorld');

const calcSumResult = doc.querySelector('.calculate-sum__result');
const calcSumInput1 = doc.querySelector('.calculate-sum__input1');
const calcSumInput2 = doc.querySelector('.calculate-sum__input2');
const btnCalcSum = doc.querySelector('.calculate-sum__btn');

console.log('go');

btnHelloWorld.onclick = () => console.log('Hello World!!');

btnCalcSum.onclick = () => calcSumResult.innerText = calculateSum(calcSumInput1.value, calcSumInput2.value)


function calculateSum(number1, number2) {
    return Number(number1) + Number(number2) || 0;
}