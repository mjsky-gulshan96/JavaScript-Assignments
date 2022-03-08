// 2. callback in AJAX request

function getFile(callback) {
    let req=new XMLHttpRequest();
    req.open('GET',"../basics And Functions/basics.html");
    req.send();
    req.onload=function(){
        console.log('inside onload');
        if(req.status==200) {
            callback(this.responseText)
        } else {
            callback('error ' +req.status)
        }
    }
}

getFile(sendFile)

function sendFile(data){
    document.getElementById('display').innerHTML=data;
}