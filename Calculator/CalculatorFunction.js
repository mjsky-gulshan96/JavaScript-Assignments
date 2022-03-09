

function calculate(array) {

    let maxPrecedence = operatorPrecendence(array)

    while (maxPrecedence > 0) {
        for (let i = 1; i < array.length; i += 2) {
            let val = checkPrecedence(array[i])
            if (val === maxPrecedence) {
                let operator = array[i];
                console.log(operator);
                switch (operator) {
                    case "+":
                        let sum = add(array[i - 1], array[i + 1]) + '';
                        array.splice(i-1,3,sum);
                        i-=2;
                        break;
                    case "-":
                        let subtract = sub(array[i - 1], array[i + 1]) + '';
                        array.splice(i-1,3,subtract);
                        i-=2;
                        break;
                    case "x":
                        let multiply = mul(array[i - 1], array[i + 1]) + '';
                        array.splice(i-1,3,multiply);
                        i-=2;
                        break;
                    case "÷":
                        let divide = div(array[i - 1], array[i + 1]) + '';
                        array.splice(i-1,3,divide);
                        i-=2;
                        break;
                    case "%":
                        let percentage = percent(array[i - 1], array[i + 1])
                        array[i + 1] = percentage + "";
                        break;
                    default:
                        break;
                }
            }
            console.log(array);
        }
        maxPrecedence = maxPrecedence - 1;
    }
    return array[0];
}

function mapPrecedence() {
    const precedence = new Map();
    precedence.set('-', 1)
    precedence.set('+', 1)
    precedence.set('x', 2)
    precedence.set('÷', 2)
    return precedence;
}

function operatorPrecendence(arr) {
    let max = 1;

    let precedence =mapPrecedence()
    for (let i = 1; i < arr.length; i += 2) {
        let val = precedence.get(arr[i])
        if (val > max) {
            max = val;
        }
    }
    return max;
}

function checkPrecedence(oper) {
    let precedence =mapPrecedence()
    return precedence.get(oper)
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

export default calculate;
