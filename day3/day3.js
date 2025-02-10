//alert("Hello");

//let userName = prompt("What is youe name?", "");
//alert("Hello " + userName);

//Don't put .value at input coz it'll take the initial value being an empty string
let input = document.querySelector('.input');
let greeting = document.querySelector('.greeting');


greeting.addEventListener('click', () => {
   //get the input value to display on the alert box
    const inputValue = input.value;
    alert("Hello " + inputValue);
})