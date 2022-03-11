
let digits = document.querySelectorAll('.numbers button'); // for numbers 0,1,2,3,4....
let symbol = document.querySelectorAll('.operators button, #percent'); // for operators +,-,x,/,%
let compute = document.querySelector("#compute"); // for equal button
let clearAll = document.querySelector("#clearAll"); // for AC btn
let remove = document.querySelector("#remove"); // for back key

import calculator from "./CalculatorClass.js";  
import calculate from "./CalculatorFunction.js";

// on numbers 
for (const digit of digits) {

    digit.addEventListener('click', function () {
        let digitValue = digit.innerHTML;
        calculator.appendNumber(digitValue);
    })
}

// on operators
for (const item of symbol) {

    item.addEventListener('click', function () {
        let symbolValue = item.innerHTML;
        calculator.appendSymbol(symbolValue);
    })
}


// on back key
remove.addEventListener('click', function () {
    calculator.remove();
})

// on clear All
clearAll.addEventListener('click', function () {
    calculator.clear();
})

// on equal to
compute.addEventListener('click', function () {
    // equal method of calculator return a array
    const array = calculator.equalTo();
    if (array === undefined) return;
    // sending the array for calculator in calculatorFunction
    let val=calculate(array);

    // updating the result returned from calculate function
    document.querySelector('#display').value = val;
    calculator.screenMemory = val;
    calculator.screenDisplay = val;
    calculator.array = []
})

