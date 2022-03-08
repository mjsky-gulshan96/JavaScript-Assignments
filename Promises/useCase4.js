
// async and await


const getFile = async function () {

     return await new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', '../basics And Functions/basics.html')
        xhr.onload = function () {
            if (xhr.status === 200) {
                let data = xhr.responseText;
                resolve(data);
            } else {
                reject('data not found')
            }
        }
        xhr.send()
    })
}

getFile().then(function(data){
    document.getElementById('display').innerHTML= data
}).catch(function(err){
    console.log(err);
})


// example 2
async function myfun() {
    let data = await JSON.parse(localStorage.getItem('person'))
    if (data) {
        return data;
    }
    return null;
}
myfun().then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
})