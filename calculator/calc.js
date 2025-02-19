/*
let valueOnBtn = document.querySelectorAll(".num");

valueOnBtn.forEach(button => {
addEventListener('click', ()=> {
    console.log(valueOnBtn.innerHTML = inputText.value);
})
})
*/

//let inputText = document.querySelectorAll('.input');
//console.log(inputText.value);
let inputText =  document.querySelector(".input");
let valueOnBtn = document.querySelector(".num7");

valueOnBtn.addEventListener('click', ()=>{
    console.log(inputText.value += valueOnBtn.innerHTML);
});



//console.log(valueOnBtn.innerHTML);
//console.log(inputText.value = valueOnBtn.innerHTML)