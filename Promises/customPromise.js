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
        callback(success, failure)
    }
}


let promiseResult = NewPromise(handlePromise);
console.log(promiseResult);

function NewPromise(callback) {
    if (typeof (callback) !== 'function') {
        console.log('Not A Function!');
        return;
    } else {
        let promise = new MyPromise(callback);
        return promise;
    }
}

function handlePromise(resolve, reject) {
    let data = student;
    if (data) {
        resolve('hello')
        // console.log(data);
    } else {
        reject('error')
    }
}


// or 

let promise2 = new MyPromise(function (resolve, reject) {
    let data = student;
    if (data) {
        resolve()
    } else {
        reject()
    }
})

console.log(promise2);
