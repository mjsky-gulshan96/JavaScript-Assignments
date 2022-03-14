import student from "./DummyData.js";

class MyPromise {
    constructor(callback) {
        this.PromiseState = 'Pending'
        this.PromiseResult = undefined;

        const success = (value) => {
            if (this.PromiseState !== 'Pending') return;
            this.PromiseState = 'Fulfilled';
            this.PromiseResult = value;
        }

        const failure = (value) => {
            if (this.PromiseState !== 'Pending') return;
            this.PromiseState = 'Rejected';
            this.PromiseResult = value;
        }

        try {
            callback(success, failure)
        } catch (error) {
            failure(error);
        }
    }

    then(onSuccess, onFailure) {
        if (this.PromiseState === 'Fulfilled') {
            onSuccess(this.value);
        } else if (this.PromiseState === 'Rejected') {
            onFailure(this.value);
        }
    }
}

// testing promise
function NewPromise(callback) {
    if (typeof (callback) !== 'function') {
        console.log('Not A Function!');
        return;
    } else {
        let promise = new MyPromise(callback);
        return promise;
    }
}

let promiseResult = NewPromise(handlePromise);
console.log(promiseResult);

function handlePromise(resolve, reject) {
    let data = student;
    if (data) {
        resolve('success');
    } else {
        reject('error');
    }
}

promiseResult.then(function () {
    console.log('resolved');
}, function () {
    console.log('rejected');
})

// 2nd example

let promise2 = new MyPromise(function (resolve, reject) {
    let data = student;
    if (!data) {
        resolve('success')
    } else {
        reject('error')
    }
})

console.log(promise2);

promise2.then(function () {
    console.log('Resolved');
}, function () {
    console.log('Rejected');
})