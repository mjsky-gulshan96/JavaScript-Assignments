
class Calculator {
    constructor() {
        // screenDisplay will display everything on screen
        this.screenDisplay = "";
        // this will temporarily store the numbers only
        this.screenMemory = "";
        // this will store the combination of numbers and operation , which later passed for calculation
        this.array = [];
    }

    appendNumber(number) {
        // handling two decimals in a number
        if (number === '.' && this.screenMemory.includes('.')) return;

        // not doing anything wiht -ve button
        if (number === '-ve') return;

        // appending the number to screenDisplay and screenMemory
        this.screenDisplay += number;
        this.screenMemory += number;
        console.log("screenMemory ", this.screenMemory);

        // updating the display on screen
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

        // handling two continious operator in middle, getting last index of screenDisplay
        let checkPosition = Number(this.screenDisplay.charAt(this.screenDisplay.length - 1));
        console.log("checkPosition ", checkPosition);

        // if lastIndex is Not A Number and not the first position in array, just return
        if (isNaN(checkPosition) && this.array.length !== 0) return;

        // adding operation to screen and array
        this.screenDisplay += this.operation;
        console.log("screenDisplay ", this.screenDisplay);
        this.array.push(this.operation);

        // empty the screenMemory so that the new number start storing from fresh
        this.screenMemory = '';
        console.log("screenmemory ", this.screenMemory);
        console.log(this.array);

        // updating display
        this.updateDisplay();
    }

    updateDisplay() {
        document.querySelector("#display").value = this.screenDisplay;
    }

    equalTo() {
        // checking last index (shoud not be a operator) , if operator just return
        let checkPos = Number(this.screenDisplay.charAt(this.screenDisplay.length - 1));
        if (isNaN(checkPos)) return;

        // pushing the screenMemory to array
        this.array.push(this.screenMemory);
        return this.array;
    }

    remove() {
        // checking last index of screenDisplay
        let checkLastIndex = this.screenDisplay.charAt(this.screenDisplay.length - 1);
        console.log('checkLastIndex ', checkLastIndex);

        // if lastIndex is operator, just pop from array else slice the ScreenMemory;
        if (isNaN(Number(checkLastIndex))) {
            this.array.pop();
            console.log(this.array);
        } else {
            this.screenMemory = this.screenMemory.slice(0, -1);
            console.log('screenMemory', this.screenMemory);
            console.log(this.array);
        }

        // slice the screenDisplay
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