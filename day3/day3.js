//alert("Hello");

//let userName = prompt("What is youe name?", "");

//alert("Hello " + userName);

let input = document.querySelector('.input');
let greeting = document.querySelector('.greeting');


greeting.addEventListener('click', () => {
    alert("Hello " + input);
})