//alert("Hello");

//let userName = prompt("What is youe name?", "");
//alert("Hello " + userName);

//Don't put .value at input coz it'll take the initial value being an empty string
let firstName = document.querySelector('.first-name');
let secondName = document.querySelector('.second-name');
let age = document.querySelector('.age');

let greeting = document.querySelector('.greeting');

//greeting.addEventListener('click', () => {   
//});

function sendGreeting (){
    //get the input value to display on the alert box
    let theFirstName = firstName.value;
    let theSecondName = secondName.value;
    let theAge = isNaN(age.value);

    if(theAge){
        alert("Please enter a valid number!");
    } else{
        alert("Hello " + theFirstName +" "+ theSecondName +" "+ age.value);
    }
    console.log("sent");

};


let today = new Date().getFullYear();
console.log(today);

let copyright = '';
copyright += `
    <p>
        <span> &copy ${today} </span>
    </p>
`
document.querySelector('.copyright').innerHTML = copyright