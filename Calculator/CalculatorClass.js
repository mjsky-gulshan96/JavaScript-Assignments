
class Calculator {
    constructor() {
        this.screenDisplay = "";
        this.screenMemory = "";
        this.array = [];
    }

    appendNumber(number) {
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
        let pos = Number(this.screenDisplay.charAt(this.screenDisplay.length - 1));
        console.log("pos ", pos, typeof (pos));

        if (pos === 0 && operation === '-') {
            this.appendNumber("-");
            return;
        }
        else if (isNaN(pos) || (pos === 0)) return;

        this.screenDisplay += this.operation;
        console.log("screenDisplay ", this.screenDisplay);

        if (this.screenMemory.length !== 0) this.array.push(this.screenMemory);
        this.array.push(this.operation);
        this.screenMemory = '';
        console.log("current array ", this.array);
        this.updateDisplay();
    }

    updateDisplay() {
        document.querySelector("#display").value = this.screenDisplay;
    }

    equalTo() {
        let pos = Number(this.screenDisplay.charAt(this.screenDisplay.length - 1));
        if (isNaN(pos) || this.array.length === 1) return;

        this.array.push(this.screenMemory);
        console.log("array before opern: ", this.array);
        return this.array;
    }

    remove() {
        this.screenDisplay = this.screenDisplay.slice(0, -1);
        this.updateDisplay();
        if (this.screenMemory.length === 0) {
            this.array.pop();
            console.log("current array ", this.array);
        } else {
            this.screenMemory = this.screenMemory.slice(0, -1);
            console.log("screenMemory ", this.screenMemory);
        }
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