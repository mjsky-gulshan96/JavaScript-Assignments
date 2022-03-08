
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = new Date();
    let month = months[date.getMonth()];
    let day = days[date.getDay()];

    let todayDate = day + ", " + date.getDate() + " " + month;

    // setting todays date
    document.querySelector('#date').innerText = todayDate;

    // setting name
    let Myname = window.prompt("enter your name");
    document.querySelector('#name').innerText = Myname;


    let items = []    // array storing all the todo by user
    let add = document.querySelector('#addTask');   // target add task button 

    // event listener on add task button
    add.addEventListener('click', function () {

        // target input field, create li ,assign todo text to li
        let inputText = document.querySelector('input').value;
        console.log(inputText);
        let li = document.createElement('li');
        li.innerText = inputText;

        // create remove button, append remove button to li
        let removebtn = document.createElement('button');
        removebtn.className = "remove";
        removebtn.innerText = "X";
        li.appendChild(removebtn);

        // target ul , appending li to ul (in stack structure)
        let ul = document.querySelector('ul');
        let pos = ul.firstElementChild;
        if (pos == null) {
            ul.appendChild(li);
        } else {
            ul.insertBefore(li, pos)
        }

        // pushing todo text to array, clear the input field
        items.push(inputText)
        console.log(items);
        document.querySelector('input').value = ""

        let len=items.length;
        document.querySelector('#total').innerText=len

    })

    // target ul , target li items (e.target), remove li 
    let ul = document.querySelector('ul');
    ul.addEventListener('click', function (e) {
        console.log(e.target);
        let li = e.target.parentNode;
        console.log(li);
        ul.removeChild(li);

        items.pop()
        let len=items.length;
        document.querySelector('#total').innerText=len
    })

    
    // practicing e.target
    // let mybtn=document.querySelector("#mybtn");

    // mybtn.addEventListener('click',function(e){
    //     console.log(e.target);

    // })


    ar=[1,2,3,4,5]
    let iterator = ar[Symbol.iterator]();

    while (true) {
    const result = iterator.next();
    if (result.done) break;
    console.log(result.value)
    }


