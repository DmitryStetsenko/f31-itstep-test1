const doc = document;

const btnHelloWorld = doc.querySelector('.btn-helloWorld');

const calcSumResult = doc.querySelector('.calculate-sum__result');
const calcSumInput1 = doc.querySelector('.calculate-sum__input1');
const calcSumInput2 = doc.querySelector('.calculate-sum__input2');
const btnCalcSum = doc.querySelector('.calculate-sum__btn');

console.log('go');

const bradCrumbsTitles = ['bradCrumpTitle 1','bradCrumpTitle 2','bradCrumpTitle 3','bradCrumpTitle 4'];
renderBradCrumbsItems(bradCrumbsTitles);



btnHelloWorld.onclick = () => console.log('Hello World!!');
btnCalcSum.onclick = () => calcSumResult.innerText = calculateSum(calcSumInput1.value, calcSumInput2.value);



// ------------------functions------------------------

function renderBradCrumbsItems(titles) {
    titles.forEach(title => renderBradCrumbsItem('.brad-crumbs', title));
}

function renderBradCrumbsItem(paremtElementSelector, title) {
    const parentElement = doc.querySelector(paremtElementSelector);
    parentElement.innerHTML += `<li class="brad-crumbs__item"><a href="#">${title}</a></li>`;
}

function calculateSum(number1, number2) {
    return Number(number1) + Number(number2) || 0;
}