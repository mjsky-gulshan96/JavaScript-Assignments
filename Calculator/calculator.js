
let digits = document.querySelectorAll('.numbers button'); // for numbers 0,1,2,3,4....
let symbol = document.querySelectorAll('.operators button, #percent'); // for operators +,-,x,/,%
let compute = document.querySelector("#compute"); // for equal button
let clearAll = document.querySelector("#clearAll"); // for AC btn
let remove = document.querySelector("#remove"); // for back key

import calculator from "./CalculatorClass.js";  

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

// on equal to
compute.addEventListener('click', function () {
    const arr = calculator.equalTo();
    if (arr === undefined) return;
    calculate(arr);
})

// on back key
remove.addEventListener('click', function () {
    calculator.remove();
})

// on clear All
clearAll.addEventListener('click', function () {
    calculator.clear();
})



// main function
function calculate(array) {

    for (let i = 0; i < array.length; i++) {

        let operations = array[i];
        switch (operations) {
            case "+":
                let sum = add(array[i - 1], array[i + 1])
                array[i + 1] = sum + "";
                break;
            case "-":
                let subtract = sub(array[i - 1], array[i + 1])
                array[i + 1] = subtract + "";
                break;
            case "x":
                let multiply = mul(array[i - 1], array[i + 1])
                array[i + 1] = multiply + "";
                break;
            case "÷":
                let divide = div(array[i - 1], array[i + 1])
                array[i + 1] = divide + "";
                break;
            case "%":
                let percentage = percent(array[i - 1], array[i + 1])
                array[i + 1] = percentage + "";
                break;
            default:
                break;
        }

    }
    console.log("array after opern: ", array);
    let val = array[array.length - 1]
    document.querySelector('#display').value = val;
    calculator.screenMemory = val;
    calculator.screenDisplay = val;
    calculator.array = []
    console.log(array);
}


// all the arithemtic functions
function add(a, b) {
    return Number(a) + Number(b);
}

function sub(a, b) {
    return Number(a) - Number(b);
}

function mul(a, b) {
    return Number(a) * Number(b);
}

function div(a, b) {
    return Number(a) / Number(b);
}

function percent(a, b) {
    return (Number(a) * Number(b)) / 100;
}

