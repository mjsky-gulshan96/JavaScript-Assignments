import person from "../Callback Functions/Dummydata.js"

localStorage.setItem("person",JSON.stringify(person))

// accessing data from local storage

function myPromise() {

    return new Promise(function (resolve, reject) {
        let data = JSON.parse(localStorage.getItem('person'))
        if (data) {
            resolve(data)
        } else {
            reject('Data not found')
        }
    })
}

console.log('before ex 1');

myPromise().then(function (data) {
    console.log('inside ex 1');
}).catch(function (error) {
    console.log(error);
})

console.log('after ex 1');
