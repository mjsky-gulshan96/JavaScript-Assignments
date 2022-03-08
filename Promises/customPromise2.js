
function MyPromise(callback) {
    this.promiseState = 'Pending';
    this.promiseResult = undefined;

    const success = (value) => {
        if (this.promiseState!=='Pending') return
        this.promiseState = 'Fulfilled';
        this.promiseResult = value;
    }

    const failure = (value) => {
        if (this.promiseState!=='Pending') return
        this.promiseState = 'Rejected';
        this.promiseResult = value;
    }

    callback(success, failure);
}

function stateHandler(resolve, reject) {
    resolve()
    // reject()
}

let newPromise = new MyPromise(stateHandler)
console.log(newPromise);
