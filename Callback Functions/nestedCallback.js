
// nested callbacks

function fun1(value, callback) {
    callback(value + 1, false);
}
function fun2(value, callback) {
    callback(value + 1, false);
}
function fun3(value, callback) {
    callback(value + 1, false);
}

fun1(0, function (firstResult, error) {  // firstResult =1
    if (!error) {
        fun2(firstResult, function (secondResult, error) {  // secondResult =2
            if (!error) {
                fun3(secondResult, function (thirdResult, error) {  // thirdResult =3
                    if (!error) {
                        console.log(thirdResult);
                    }
                })
            }
        })
    }
})