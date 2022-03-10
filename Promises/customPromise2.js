import student from "./DummyData.js";


function MyPromise(callback) {
    if (typeof (callback) !== 'function') {
        console.log('Not A function');
        return;
    } else {

        this.promiseState = 'Pending';
        this.promiseResult = undefined;

        const success = (value) => {
            if (this.promiseState !== 'Pending') return
            this.promiseState = 'Fulfilled';
            this.promiseResult = value;
        }

        const failure = (value) => {
            if (this.promiseState !== 'Pending') return
            this.promiseState = 'Rejected';
            this.promiseResult = value;
        }

        callback(success, failure);

    }
}

function stateHandler(resolve, reject) {
    let data = student;
    if (data) {
        resolve();
    } else {
        reject();
    }
}

let newPromise = new MyPromise(stateHandler)
console.log(newPromise);
