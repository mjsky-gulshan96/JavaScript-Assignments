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


function myfun(callback) {
    let promise = new MyPromise(callback);
    return promise;
}

let promiseResult = myfun(handlePromise);
console.log(promiseResult);

function handlePromise(resolve, reject) {
    let data = student;
    if (data) {
        resolve()
        // console.log(data);
    } else {
        reject()
    }
}

// or 

// let promise2 = new MyPromise(function(resolve,reject){
//     resolve()
// })

// console.log(promise2);
