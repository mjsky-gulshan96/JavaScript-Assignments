
class Calculator {
    constructor() {
        this.screenDisplay = "";
        this.screenMemory = "";
        this.array = [];
    }

    appendNumber(number) {
        // handling two decimals in a number
        if (number === '.' && this.screenMemory.includes('.')) return;

        if (number === '-ve') return;

        this.screenDisplay += number;
        this.screenMemory += number;
        console.log("screenMemory ", this.screenMemory);
        console.log("screenDisplay ", this.screenDisplay);
        this.updateDisplay();
    }

    appendSymbol(operation) {
        this.operation = operation;

        // pushing the number stored in screen memory to array
        if (this.screenMemory.length !== 0) {
            this.array.push(this.screenMemory);
        }

        // handling + and - operator at start
        if ((this.array.length === 0) && (operation === '-' || operation === '+')) {
            this.appendNumber(operation);
            return;
        }

        // two continious operator in middle
        let checkPosition = Number(this.screenDisplay.charAt(this.screenDisplay.length - 1));
        console.log(checkPosition);
        console.log("checkPosition ", checkPosition);
        if (isNaN(checkPosition) && this.array.length !== 0) return;

        this.screenDisplay += this.operation;
        console.log("screenDisplay ", this.screenDisplay);

        this.array.push(this.operation);
        this.screenMemory = '';
        console.log("screenmemory ", this.screenMemory);
        console.log("current array ", this.array);
        this.updateDisplay();
    }

    updateDisplay() {
        document.querySelector("#display").value = this.screenDisplay;
    }

    equalTo() {
        // checking last index (shoud not be a operator)
        let checkPos = Number(this.screenDisplay.charAt(this.screenDisplay.length - 1));
        if (isNaN(checkPos)) return;

        // pushing last element to array
        this.array.push(this.screenMemory);
        console.log("array before opern: ", this.array);
        return this.array;
    }

    remove() {
        // pushing in array,if any number in screen memory
        if (this.screenMemory.length !== 0) {
            this.array.push(this.screenMemory);
        }

        // checking lastIndex of array
        let checkLastIndex = this.array[this.array.length - 1];
        if (checkLastIndex === '') {
            this.array.pop()
            checkLastIndex = this.array[this.array.length - 1];
            console.log(checkLastIndex);
        }

        // if lastIndex is operator, just pop else slice the number;
        if (isNaN(Number(checkLastIndex))) {
            this.array.pop();
            console.log(this.array);
        } else {
            this.array[this.array.length - 1] = checkLastIndex.slice(0, -1);
            console.log(this.array);
        }

        this.screenDisplay = this.screenDisplay.slice(0, -1);
        this.updateDisplay();
    }

    clear() {
        this.screenDisplay = "";
        this.screenMemory = "";
        this.array = [];
        this.updateDisplay();
    }
}

const calculator = new Calculator();

export default calculator;