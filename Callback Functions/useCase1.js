import person from "./Dummydata.js";

localStorage.setItem("person",JSON.stringify(person))

// 1. callback in eventListener ,synchronus

function getPerson() {
    let data= JSON.parse(localStorage.getItem('person'))
    for (const key in data) {
        setPerson(key,data[key])
    }
}
let btn=document.getElementById('btn');
btn.addEventListener('click' , getPerson);


function setPerson(id,value) {
    let div=document.getElementById('container')
    let span=document.createElement('span')
    span.innerText=`id: ${id}`;
    div.appendChild(span);
    let ul=document.createElement('ul');
    for (const key in value) {
        let li= document.createElement('li');
        li.innerHTML=`${key} = ${value[key]}`
        ul.appendChild(li)
        div.appendChild(ul);
    }
}