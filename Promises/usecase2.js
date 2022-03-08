
// multiple then instead of nested callbacks


function fun1(value) {
    return value + 1;
}
function fun2(value) {
    return value + 1;
}
function fun3(value) {
    return value + 1;
}

function promise() {
    return new Promise(function (resolve, reject) {
        let err = false;
        if (!err) {
            resolve(0);
        } else {
            reject("error occured")
        }
    })
}

console.log('before promise ex 2');

promise().then(fun1).then(fun2).then(fun3).then(function (result) {
    console.log(result);
    console.log('inside promise example 2');
}).catch(function (err) {
    console.log(err);
})

console.log('after promise ex 2');