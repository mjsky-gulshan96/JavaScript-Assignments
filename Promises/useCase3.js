
// AJAX request

function getData() {

    return new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        let url = "../basics And Functions/basics.html"
        req.open('GET', url);
        req.send();
        req.onload = function () {
            if (req.status == 200) {
                resolve(this.response)
            } else {
                reject('error')
            }
        }
    })

}
console.log('before promise example 3');

getData().then(function(data){
    console.log('inside promise example 3');
    document.getElementById('display').innerHTML=data
}).catch(function(error){
    console.log(error);
})

console.log('after promise example 3');